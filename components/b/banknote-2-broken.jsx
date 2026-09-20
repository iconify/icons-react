import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n54zvri0c.css';
import '../../css/c/c5vk6tgit.css';
import '../../css/n/na52euwwy.css';
import '../../css/k/kkrotxg9c.css';
import '../../css/c/c5mjns4ur.css';
import '../../css/v/vxj36_bej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="n54zvri0c"/><path class="c5vk6tgit"/><path class="na52euwwy"/><path class="kkrotxg9c"/><path class="c5mjns4ur"/><path class="vxj36_bej"/></g>`,
		"fallback": "solar:banknote-2-broken",
	});
}

export default Component;
