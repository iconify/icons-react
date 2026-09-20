import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzpxb50ur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzpxb50ur"/>`,
		"fallback": "mage:chevron-up-circle-fill",
	});
}

export default Component;
