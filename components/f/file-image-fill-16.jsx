import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-bh2obll.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-bh2obll"/>`,
		"fallback": "garden:file-image-fill-16",
	});
}

export default Component;
