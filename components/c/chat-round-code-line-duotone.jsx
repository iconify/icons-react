import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/snto2-zvc.css';
import '../../css/w/wg8azcbhn.css';
import '../../css/h/hyjgutf1e.css';
import '../../css/f/f0g-urbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="snto2-zvc"/><path class="wg8azcbhn"/><path class="hyjgutf1e"/><path class="f0g-urbji"/></g>`,
		"fallback": "solar:chat-round-code-line-duotone",
	});
}

export default Component;
