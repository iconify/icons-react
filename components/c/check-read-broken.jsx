import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d58q_4bdh.css';
import '../../css/f/fg-hc3ysv.css';
import '../../css/j/japrfgbml.css';
import '../../css/c/c3xus2otf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d58q_4bdh"/><path class="fg-hc3ysv"/><path class="japrfgbml"/><path class="c3xus2otf"/></g>`,
		"fallback": "solar:check-read-broken",
	});
}

export default Component;
