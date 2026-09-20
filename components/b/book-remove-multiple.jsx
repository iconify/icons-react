import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdcuqjbiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdcuqjbiw"/>`,
		"fallback": "mdi:book-remove-multiple",
	});
}

export default Component;
