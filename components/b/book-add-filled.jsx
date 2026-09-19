import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eaa4zmyug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eaa4zmyug"/>`,
		"fallback": "boxicons:book-add-filled",
	});
}

export default Component;
