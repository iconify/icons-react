import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sww6cebxb.css';
import '../../css/b/bwsf8zpll.css';
import '../../css/s/sr5bgubyr.css';
import '../../css/b/buo1kubox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sww6cebxb"/><path class="bwsf8zpll"/><path class="sr5bgubyr"/><path class="buo1kubox"/></g>`,
		"fallback": "solar:bag-2-broken",
	});
}

export default Component;
