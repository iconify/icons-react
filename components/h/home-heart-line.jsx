import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo82r35gp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo82r35gp"/>`,
		"fallback": "ri:home-heart-line",
	});
}

export default Component;
