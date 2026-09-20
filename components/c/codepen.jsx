import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5a7bnb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5a7bnb_y"/>`,
		"fallback": "mynaui:codepen",
	});
}

export default Component;
