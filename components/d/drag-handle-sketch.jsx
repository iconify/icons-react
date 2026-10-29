import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e--nlzj6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e--nlzj6l wm-k"/>`,
		"fallback": "withicons:drag-handle-sketch",
	});
}

export default Component;
