import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i0c0wnfvv.css';
import '../../css/s/shi3-fcss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="i0c0wnfvv"/><path class="shi3-fcss"/></g>`,
		"fallback": "streamline-logos:doctrine-logo",
	});
}

export default Component;
