import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mng7wpk2x.css';
import '../../css/x/xksf8x9wn.css';
import '../../css/m/miz1kgs2d.css';
import '../../css/w/w46cx4bxp.css';
import '../../css/q/q-53uvu6x.css';
import '../../css/i/i0tr0cbzh.css';
import '../../css/k/km5m0gbeq.css';
import '../../css/g/gocuv-buu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mng7wpk2x"/><path class="xksf8x9wn"/><path class="miz1kgs2d"/><path class="w46cx4bxp"/><path class="q-53uvu6x"/><path class="i0tr0cbzh"/><path class="km5m0gbeq"/><path class="gocuv-buu"/>`,
		"fallback": "fxemoji:bus",
	});
}

export default Component;
