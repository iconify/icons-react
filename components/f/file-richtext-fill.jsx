import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1bbxobxl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1bbxobxl"/>`,
		"fallback": "bi:file-richtext-fill",
	});
}

export default Component;
