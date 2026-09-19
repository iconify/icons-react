import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vkrhpubcr.css';
import '../../css/p/p3ksa9-0a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vkrhpubcr"/><path class="p3ksa9-0a"/></g>`,
		"fallback": "glyphs:car-tilt",
	});
}

export default Component;
