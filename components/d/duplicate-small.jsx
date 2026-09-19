import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9b_vk3fy.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9b_vk3fy"/>`,
		"fallback": "dinkie-icons:duplicate-small",
	});
}

export default Component;
