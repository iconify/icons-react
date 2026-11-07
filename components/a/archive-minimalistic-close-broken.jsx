import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jgnu0ac5k.css';
import '../../css/p/p5qbbdc2d.css';
import '../../css/a/azjlppy5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jgnu0ac5k"/><path class="p5qbbdc2d"/><path class="azjlppy5c"/></g>`,
		"fallback": "solar:archive-minimalistic-close-broken",
	});
}

export default Component;
