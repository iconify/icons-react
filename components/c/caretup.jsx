import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfvwfdc9y.css';

const viewBox = {"width":16,"height":9};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfvwfdc9y"/>`,
		"fallback": "formkit:caretup",
	});
}

export default Component;
