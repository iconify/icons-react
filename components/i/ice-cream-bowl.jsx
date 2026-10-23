import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b47e4sbey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b47e4sbey"/>`,
		"fallback": "vadivam:ice-cream-bowl",
	});
}

export default Component;
