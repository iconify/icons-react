import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/li9m6sqtf.css';
import '../../css/c/clljkznko.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="li9m6sqtf"/><path class="clljkznko"/></g>`,
		"fallback": "glyphs:border-center",
	});
}

export default Component;
