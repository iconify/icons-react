import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ox8jtnb5i.css';
import '../../css/o/os6sag8kr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ox8jtnb5i"/><path class="os6sag8kr"/></g>`,
		"fallback": "streamline:computer-desktop-lock-device-secure-display-computer-lock-desktop-padlock-security",
	});
}

export default Component;
