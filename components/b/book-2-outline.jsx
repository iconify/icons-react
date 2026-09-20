import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uua9rsbgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uua9rsbgs"/>`,
		"fallback": "solar:book-2-outline",
	});
}

export default Component;
