import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kogo6swwh.css';
import '../../css/m/muqx_rb4a.css';
import '../../css/d/dcvk1qzxm.css';
import '../../css/k/kd-9y2hnw.css';
import '../../css/f/feqz8zbyh.css';
import '../../css/x/xmxhvjcpc.css';
import '../../css/s/s0v566tts.css';
import '../../css/y/ytda-0b0u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kogo6swwh"/><path class="muqx_rb4a"/><path class="dcvk1qzxm"/><path class="kd-9y2hnw"/><path class="feqz8zbyh"/><path class="xmxhvjcpc"/><path class="s0v566tts"/><path class="ytda-0b0u"/>`,
		"fallback": "fxemoji:camping",
	});
}

export default Component;
