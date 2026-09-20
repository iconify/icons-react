import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lqxpnhbbd.css';
import '../../css/v/vs6v5wbbc.css';
import '../../css/z/zddet0_on.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lqxpnhbbd"/><circle class="vs6v5wbbc"/><path class="zddet0_on"/></g>`,
		"fallback": "streamline:computer-desktop-block-desktop-device-display-disable-permission-computer",
	});
}

export default Component;
