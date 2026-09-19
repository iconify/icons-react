import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/soy_9ky_s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="soy_9ky_s"/>`,
		"fallback": "bi:file-fill",
	});
}

export default Component;
