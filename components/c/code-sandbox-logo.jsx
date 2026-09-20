import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cy7yavbej.css';
import '../../css/w/wv0gd5x-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cy7yavbej"/><path class="wv0gd5x-g"/></g>`,
		"fallback": "streamline-logos:code-sandbox-logo",
	});
}

export default Component;
