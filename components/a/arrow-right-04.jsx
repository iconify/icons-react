import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu-85oigi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu-85oigi"/>`,
		"fallback": "hugeicons:arrow-right-04",
	});
}

export default Component;
