import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojapn6a8r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ojapn6a8r"/>`,
		"fallback": "streamline:information-desk-customer-solid",
	});
}

export default Component;
