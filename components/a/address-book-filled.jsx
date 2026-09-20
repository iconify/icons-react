import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbv8r5b3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbv8r5b3k"/>`,
		"fallback": "tdesign:address-book-filled",
	});
}

export default Component;
