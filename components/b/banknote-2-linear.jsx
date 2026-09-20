import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dhr1m1b7l.css';
import '../../css/l/l71ybw41v.css';
import '../../css/c/c5vk6tgit.css';
import '../../css/n/na52euwwy.css';
import '../../css/k/kkrotxg9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dhr1m1b7l"/><path class="l71ybw41v"/><path class="c5vk6tgit"/><path class="na52euwwy"/><path class="kkrotxg9c"/></g>`,
		"fallback": "solar:banknote-2-linear",
	});
}

export default Component;
