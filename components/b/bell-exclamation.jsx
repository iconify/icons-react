import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/az06j0fze.css';
import '../../css/a/agninsb1b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="az06j0fze"/><path class="agninsb1b"/></g>`,
		"fallback": "glyphs:bell-exclamation",
	});
}

export default Component;
