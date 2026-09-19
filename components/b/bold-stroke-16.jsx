import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx75f44uz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx75f44uz"/>`,
		"fallback": "garden:bold-stroke-16",
	});
}

export default Component;
