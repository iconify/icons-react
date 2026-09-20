import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr4n1vk1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr4n1vk1g"/>`,
		"fallback": "lets-icons:bookmark-duotone",
	});
}

export default Component;
