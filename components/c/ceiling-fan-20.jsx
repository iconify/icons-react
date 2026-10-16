import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbusism_o.css';
import '../../css/w/wg80aqv_q.css';
import '../../css/z/zc-n46vmj.css';
import '../../css/f/fujwj-hky.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbusism_o"/><path class="wg80aqv_q"/><path class="zc-n46vmj"/><path class="fujwj-hky"/>`,
		"fallback": "energy-icons:ceiling-fan-20",
	});
}

export default Component;
