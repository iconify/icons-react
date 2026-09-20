import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk7-uhbzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk7-uhbzr"/>`,
		"fallback": "vadivam:heading-1",
	});
}

export default Component;
