import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf6u91bpy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf6u91bpy"/>`,
		"fallback": "rivet-icons:arrow-up-left",
	});
}

export default Component;
