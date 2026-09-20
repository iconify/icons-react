import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lmrq91btd.css';
import '../../css/s/sarne4b5w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="lmrq91btd"/><path class="sarne4b5w"/></g>`,
		"fallback": "streamline:computer-hand-held-tablet-kindle-device-electronics-ipad-computer",
	});
}

export default Component;
