import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx61fjb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx61fjb_e"/>`,
		"fallback": "boxicons:book-open-filled",
	});
}

export default Component;
