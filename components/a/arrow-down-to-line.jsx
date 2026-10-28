import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga0_vkbuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga0_vkbuo"/>`,
		"fallback": "vadivam:arrow-down-to-line",
	});
}

export default Component;
