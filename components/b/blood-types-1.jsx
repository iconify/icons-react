import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fi9fwoivw.css';
import '../../css/w/wwvzzybpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fi9fwoivw"/><path class="wwvzzybpn"/></g>`,
		"fallback": "streamline-ultimate:blood-types-1",
	});
}

export default Component;
