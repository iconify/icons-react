import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktswjabgz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktswjabgz"/>`,
		"fallback": "garden:file-error-stroke-16",
	});
}

export default Component;
