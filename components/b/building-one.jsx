import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-vq89wpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-vq89wpz"/>`,
		"fallback": "mynaui:building-one",
	});
}

export default Component;
