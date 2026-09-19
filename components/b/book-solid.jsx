import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd1q9wb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fd1q9wb1s"/>`,
		"fallback": "basil:book-solid",
	});
}

export default Component;
