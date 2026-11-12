import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5ku-ztwy.css';
import '../../css/i/ib2bxjbcn.css';
import '../../css/m/ma62eabge.css';
import '../../css/a/aqp8o2-2p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5ku-ztwy"/><path class="ib2bxjbcn"/><path class="ma62eabge"/><path class="aqp8o2-2p"/>`,
		"fallback": "selfhst:homescreen-hero-dark",
	});
}

export default Component;
