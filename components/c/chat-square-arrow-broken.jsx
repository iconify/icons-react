import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hognm4jxm.css';
import '../../css/z/zlax79hmy.css';
import '../../css/a/auzyv3bch.css';
import '../../css/n/n_45qf4se.css';
import '../../css/e/ewo3jxb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hognm4jxm"/><path class="zlax79hmy"/><path class="auzyv3bch"/><path class="n_45qf4se"/><path class="ewo3jxb8s"/></g>`,
		"fallback": "solar:chat-square-arrow-broken",
	});
}

export default Component;
