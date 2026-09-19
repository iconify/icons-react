import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/decdb8bpm.css';
import '../../css/t/thb564lbp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="decdb8bpm"/><path class="thb564lbp"/></g>`,
		"fallback": "glyphs:clock-fast",
	});
}

export default Component;
