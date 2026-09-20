import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se0czkb5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se0czkb5b"/>`,
		"fallback": "ri:door-fill",
	});
}

export default Component;
