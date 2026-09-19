import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i-f9edsiu.css';
import '../../css/r/rjpznebse.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="i-f9edsiu"/><path class="rjpznebse"/></g>`,
		"fallback": "glyphs:hard-drive",
	});
}

export default Component;
