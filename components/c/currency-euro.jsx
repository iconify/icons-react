import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/keu35jbsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="keu35jbsy"/>`,
		"fallback": "heroicons-outline:currency-euro",
	});
}

export default Component;
