import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sq7nmmbkp.css';
import '../../css/x/xnsv0vw4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="sq7nmmbkp"/><path class="xnsv0vw4l"/></g>`,
		"fallback": "streamline-logos:google-chat-logo",
	});
}

export default Component;
