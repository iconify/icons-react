import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx2_i26eq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx2_i26eq"/>`,
		"fallback": "mdi:email-search",
	});
}

export default Component;
