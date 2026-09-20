import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lqxpnhbbd.css';
import '../../css/c/c_mm5q25z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lqxpnhbbd"/><path class="c_mm5q25z"/></g>`,
		"fallback": "streamline:computer-desktop-favorite-star-computer-desktop-device-display-like-favorite-star",
	});
}

export default Component;
