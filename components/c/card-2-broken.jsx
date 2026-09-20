import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r8aqt-b4e.css';
import '../../css/r/rszwgq9zj.css';
import '../../css/y/ysk2hxt5c.css';
import '../../css/v/v4tjwzr-k.css';
import '../../css/e/ehgcfqbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r8aqt-b4e"/><path class="rszwgq9zj"/><path class="ysk2hxt5c"/><path class="v4tjwzr-k"/><path class="ehgcfqbdl"/></g>`,
		"fallback": "solar:card-2-broken",
	});
}

export default Component;
