import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekn7hob8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ekn7hob8u"/>`,
		"fallback": "iconamoon:arrow-right-6-circle-fill",
	});
}

export default Component;
