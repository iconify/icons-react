import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po7dnf-xe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po7dnf-xe"/>`,
		"fallback": "heroicons:currency-euro",
	});
}

export default Component;
