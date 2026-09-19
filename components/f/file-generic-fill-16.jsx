import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vts6m5b8z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vts6m5b8z"/>`,
		"fallback": "garden:file-generic-fill-16",
	});
}

export default Component;
