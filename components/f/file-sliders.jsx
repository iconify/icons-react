import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp2-p1nqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp2-p1nqr"/>`,
		"fallback": "hugeicons:file-sliders",
	});
}

export default Component;
