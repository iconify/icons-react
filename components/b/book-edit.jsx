import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvk3j3elz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvk3j3elz"/>`,
		"fallback": "hugeicons:book-edit",
	});
}

export default Component;
