import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyjp9ub1w.css';
import '../../css/p/pdfzy9j9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyjp9ub1w"/><path class="pdfzy9j9p"/>`,
		"fallback": "solar:cloud-waterdrop-bold",
	});
}

export default Component;
