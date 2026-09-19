import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/xonqv8bhq.css';
import '../../css/e/exvi9zkwm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="xonqv8bhq"/><path class="exvi9zkwm"/></g>`,
		"fallback": "glyphs:ellipsis-circle",
	});
}

export default Component;
