import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd99nnc8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd99nnc8y"/>`,
		"fallback": "keyline-icons:bed-sharp",
	});
}

export default Component;
