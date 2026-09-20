import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wvcj-vi3u.css';
import '../../css/a/a0ljpns4v.css';
import '../../css/k/kyzqyvbjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wvcj-vi3u"/><path class="a0ljpns4v"/><path class="kyzqyvbjp"/></g>`,
		"fallback": "solar:flip-vertical-broken",
	});
}

export default Component;
