import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/joh4lsb5o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="joh4lsb5o"/>`,
		"fallback": "bi:balloon-heart",
	});
}

export default Component;
