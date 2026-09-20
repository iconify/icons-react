import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inr7twbkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inr7twbkd"/>`,
		"fallback": "ri:copper-coin-line",
	});
}

export default Component;
