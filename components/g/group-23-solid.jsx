import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb21tnwxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fb21tnwxz"/>`,
		"fallback": "basil:group-23-solid",
	});
}

export default Component;
