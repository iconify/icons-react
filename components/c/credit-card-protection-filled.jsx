import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq-ak_b9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mq-ak_b9c"/>`,
		"fallback": "griddy-icons:credit-card-protection-filled",
	});
}

export default Component;
