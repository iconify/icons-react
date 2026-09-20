import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt3g05bav.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt3g05bav"/>`,
		"fallback": "picon:colon",
	});
}

export default Component;
