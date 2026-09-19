import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vo0gn9z6k.css';
import '../../css/n/nv21q0chi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vo0gn9z6k"/><path class="nv21q0chi"/></g>`,
		"fallback": "glyphs:inbox",
	});
}

export default Component;
