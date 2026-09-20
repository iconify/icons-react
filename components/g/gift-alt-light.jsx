import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq3i879dg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="mq3i879dg"/>`,
		"fallback": "lets-icons:gift-alt-light",
	});
}

export default Component;
