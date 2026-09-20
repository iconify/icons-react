import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6u19dbbl.css';
import '../../css/l/laqe9rlbp.css';
import '../../css/d/d9-01rbag.css';
import '../../css/y/yggfpi2yg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGp99RNcOs" x1="433.391" x2="-10.605" y1="446.179" y2="73.621" gradientUnits="userSpaceOnUse"><stop offset="0" class="i6u19dbbl"/><stop offset=".63" class="laqe9rlbp"/><stop offset="1" class="d9-01rbag"/></linearGradient><path fill="url(#SVGp99RNcOs)" class="yggfpi2yg"/>`,
		"fallback": "selfhst:beszel",
	});
}

export default Component;
