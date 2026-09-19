import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_21izbtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_21izbtn"/>`,
		"fallback": "bx:book-open",
	});
}

export default Component;
