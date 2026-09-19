import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/feoh_2q9b.css';
import '../../css/o/owtxs5hhl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="feoh_2q9b"/><path class="owtxs5hhl"/></g>`,
		"fallback": "glyphs:copy-2",
	});
}

export default Component;
