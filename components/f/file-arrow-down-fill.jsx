import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq7e5gbnl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq7e5gbnl"/>`,
		"fallback": "bi:file-arrow-down-fill",
	});
}

export default Component;
