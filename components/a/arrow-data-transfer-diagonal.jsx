import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilq3p7wvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilq3p7wvb"/>`,
		"fallback": "hugeicons:arrow-data-transfer-diagonal",
	});
}

export default Component;
