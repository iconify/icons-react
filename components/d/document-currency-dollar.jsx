import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omzu0k0ia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omzu0k0ia"/>`,
		"fallback": "heroicons:document-currency-dollar",
	});
}

export default Component;
