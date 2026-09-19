import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/owljg8n8o.css';
import '../../css/f/f7xpncc0q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="owljg8n8o"/><path class="f7xpncc0q"/></g>`,
		"fallback": "glyphs:camcorder",
	});
}

export default Component;
