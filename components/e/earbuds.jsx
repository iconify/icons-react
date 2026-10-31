import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pns9tc5hu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pns9tc5hu"/>`,
		"fallback": "vadivam:earbuds",
	});
}

export default Component;
