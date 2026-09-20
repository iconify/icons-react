import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgx4t6bka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgx4t6bka"/>`,
		"fallback": "vadivam:bean-off",
	});
}

export default Component;
