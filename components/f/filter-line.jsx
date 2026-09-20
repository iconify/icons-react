import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxzt4c83h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxzt4c83h"/>`,
		"fallback": "majesticons:filter-line",
	});
}

export default Component;
