import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h96mxyb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h96mxyb1c"/>`,
		"fallback": "vadivam:house-plus",
	});
}

export default Component;
