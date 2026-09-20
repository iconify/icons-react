import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ut31b35ci.css';
import '../../css/v/vwd3-vbqz.css';
import '../../css/a/a7s3qybnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ut31b35ci"/><path class="vwd3-vbqz"/><path class="a7s3qybnt"/></g>`,
		"fallback": "solar:call-medicine-linear",
	});
}

export default Component;
