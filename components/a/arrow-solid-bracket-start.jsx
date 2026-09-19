import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/ri56ljr3r.css';
import '../../css/w/wgv5gl93x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ri56ljr3r"/><path class="wgv5gl93x"/></g>`,
		"fallback": "glyphs:arrow-solid-bracket-start",
	});
}

export default Component;
