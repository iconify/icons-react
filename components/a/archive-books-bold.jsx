import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey-ae8pml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ey-ae8pml"/>`,
		"fallback": "streamline-ultimate:archive-books-bold",
	});
}

export default Component;
