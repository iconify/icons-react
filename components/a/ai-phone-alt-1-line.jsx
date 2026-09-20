import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h389tou-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h389tou-b"/>`,
		"fallback": "si:ai-phone-alt-1-line",
	});
}

export default Component;
