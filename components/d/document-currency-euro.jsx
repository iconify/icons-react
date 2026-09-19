import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgx19ns4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgx19ns4y"/>`,
		"fallback": "heroicons:document-currency-euro",
	});
}

export default Component;
