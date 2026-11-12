import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6u19dbbl.css';
import '../../css/l/laqe9rlbp.css';
import '../../css/d/d9-01rbag.css';
import '../../css/o/ocwyltn_q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGoc97GeEW" x1="433.4" x2="-10.6" y1="446.2" y2="73.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="i6u19dbbl"/><stop offset=".63" class="laqe9rlbp"/><stop offset="1" class="d9-01rbag"/></linearGradient><path fill="url(#SVGoc97GeEW)" class="ocwyltn_q"/>`,
		"fallback": "selfhst:beszel",
	});
}

export default Component;
