import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4xv_n6bp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4xv_n6bp"/>`,
		"fallback": "garden:face-very-happy-stroke-16",
	});
}

export default Component;
