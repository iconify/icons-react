import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-kvv8b0p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-kvv8b0p"/>`,
		"fallback": "rivet-icons:file",
	});
}

export default Component;
