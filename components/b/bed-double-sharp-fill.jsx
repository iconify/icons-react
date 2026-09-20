import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2aoh798u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2aoh798u"/>`,
		"fallback": "keyline-icons:bed-double-sharp-fill",
	});
}

export default Component;
