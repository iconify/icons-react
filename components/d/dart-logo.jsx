import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xbsr68buh.css';
import '../../css/p/p2blggb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xbsr68buh"/><path class="p2blggb6a"/></g>`,
		"fallback": "streamline-logos:dart-logo",
	});
}

export default Component;
