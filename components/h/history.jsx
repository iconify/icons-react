import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n9jtjbnps.css';
import '../../css/i/i9-nvjbvd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="n9jtjbnps"/><path class="i9-nvjbvd"/></g>`,
		"fallback": "glyphs:history",
	});
}

export default Component;
