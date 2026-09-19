import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fn7sfubln.css';
import '../../css/w/wqv4fibjt.css';
import '../../css/h/hppgl373x.css';
import '../../css/a/aqkliebgu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fn7sfubln"/><path clip-rule="evenodd" class="wqv4fibjt"/><path class="hppgl373x"/><path clip-rule="evenodd" class="aqkliebgu"/></g>`,
		"fallback": "glyphs:box-layout-4-duo",
	});
}

export default Component;
