import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wxavneb4o.css';
import '../../css/m/m3xvgsbok.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="wxavneb4o"/><path class="m3xvgsbok"/></g>`,
		"fallback": "streamline:computer-mouse-computer-device-electronics-mouse",
	});
}

export default Component;
