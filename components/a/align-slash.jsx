import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vdzhkvb2d.css';
import '../../css/t/thhglkqvk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vdzhkvb2d"/><path class="thhglkqvk"/></g>`,
		"fallback": "glyphs-poly:align-slash",
	});
}

export default Component;
