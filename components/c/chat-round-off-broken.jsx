import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e061s5bkz.css';
import '../../css/k/kmlq93bxm.css';
import '../../css/x/xh228jcir.css';
import '../../css/i/i54hzebdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e061s5bkz"/><path class="kmlq93bxm"/><path class="xh228jcir"/><path class="i54hzebdm"/></g>`,
		"fallback": "solar:chat-round-off-broken",
	});
}

export default Component;
