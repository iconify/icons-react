import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdg08x6jc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdg08x6jc"/>`,
		"fallback": "mdi:email-resend-outline",
	});
}

export default Component;
