import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kaxq7qbww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kaxq7qbww"/>`,
		"fallback": "ri:align-item-right-line",
	});
}

export default Component;
