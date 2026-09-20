import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vuc411bjw.css';
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
		"content": `<g class="ipq1z-bjh"><path class="vuc411bjw"/><path class="sr5bgubyr"/><path class="buo1kubox"/></g>`,
		"fallback": "solar:bag-check-broken",
	});
}

export default Component;
