import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-n7-wbdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-n7-wbdr"/>`,
		"fallback": "mage:chevron-up-square-fill",
	});
}

export default Component;
