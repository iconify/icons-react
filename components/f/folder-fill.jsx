import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjsiaz5ow.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjsiaz5ow"/>`,
		"fallback": "bi:folder-fill",
	});
}

export default Component;
