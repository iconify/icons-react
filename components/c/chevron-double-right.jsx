import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve6u0vqil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve6u0vqil"/>`,
		"fallback": "heroicons:chevron-double-right",
	});
}

export default Component;
