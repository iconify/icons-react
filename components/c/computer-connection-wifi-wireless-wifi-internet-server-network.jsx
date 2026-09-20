import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/ed2o0nh0x.css';
import '../../css/h/hlzmpk57l.css';
import '../../css/h/hu2pvqkyl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="ed2o0nh0x"/><path class="hlzmpk57l"/><path class="hu2pvqkyl"/></g>`,
		"fallback": "streamline:computer-connection-wifi-wireless-wifi-internet-server-network",
	});
}

export default Component;
