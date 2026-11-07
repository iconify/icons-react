import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nolfx4b0d.css';
import '../../css/y/yqkjq03-f.css';
import '../../css/h/hmy4q8b1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nolfx4b0d"/><path class="yqkjq03-f"/><path class="hmy4q8b1j"/></g>`,
		"fallback": "solar:brain-broken",
	});
}

export default Component;
