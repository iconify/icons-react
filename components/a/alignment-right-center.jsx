import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/b/bytehqb8j.css';
import '../../css/f/fz6y6p4yd.css';
import '../../css/a/a9tnmog3y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="bytehqb8j"/><path class="fz6y6p4yd"/><path class="a9tnmog3y"/></g>`,
		"fallback": "icon-park:alignment-right-center",
	});
}

export default Component;
