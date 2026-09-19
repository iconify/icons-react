import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/f/flinjuzmh.css';
import '../../css/f/f_89nxb9c.css';
import '../../css/k/km0e5ol5k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="flinjuzmh"/><path class="f_89nxb9c"/><path class="km0e5ol5k"/></g>`,
		"fallback": "icon-park:alignment-horizontal-top",
	});
}

export default Component;
