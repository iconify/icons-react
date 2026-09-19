import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vrc15wbok.css';
import '../../css/d/dw6mr4b-d.css';
import '../../css/o/ov04m3g9d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vrc15wbok"/><path class="dw6mr4b-d"/><path class="ov04m3g9d"/></g>`,
		"fallback": "glyphs:garage-duo",
	});
}

export default Component;
