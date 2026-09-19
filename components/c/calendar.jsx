import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wghhn2b4n.css';
import '../../css/u/u3npkshsu.css';
import '../../css/g/gx_g0cb7y.css';
import '../../css/g/gg0ah_btc.css';
import '../../css/n/nyhdtzkrj.css';
import '../../css/o/od2s8-bxi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wghhn2b4n"/><path class="u3npkshsu"/><path class="gx_g0cb7y"/><path class="gg0ah_btc"/><path class="nyhdtzkrj"/><path class="od2s8-bxi"/>`,
		"fallback": "fxemoji:calendar",
	});
}

export default Component;
