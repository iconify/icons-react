import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp03mxf5g.css';
import '../../css/a/aqszcbwbb.css';
import '../../css/f/f7o03acte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp03mxf5g"/><circle class="aqszcbwbb"/><circle class="f7o03acte"/>`,
		"fallback": "bx:bus-school",
	});
}

export default Component;
