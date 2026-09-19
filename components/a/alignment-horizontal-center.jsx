import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/t/tzalo3bkh.css';
import '../../css/u/uk1hw4hsp.css';
import '../../css/b/bcs037k4y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="tzalo3bkh"/><path class="uk1hw4hsp"/><path class="bcs037k4y"/></g>`,
		"fallback": "icon-park:alignment-horizontal-center",
	});
}

export default Component;
