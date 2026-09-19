import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rre9if6yl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rre9if6yl"/>`,
		"fallback": "fa7-brands:fonticons-fi",
	});
}

export default Component;
