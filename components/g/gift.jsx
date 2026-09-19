import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/ycrjt5pnk.css';
import '../../css/l/lo-jntbni.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ycrjt5pnk"/><path class="lo-jntbni"/></g>`,
		"fallback": "glyphs:gift",
	});
}

export default Component;
