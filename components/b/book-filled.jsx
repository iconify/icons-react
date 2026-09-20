import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjq_yy5-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjq_yy5-h"/>`,
		"fallback": "tdesign:book-filled",
	});
}

export default Component;
