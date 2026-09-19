import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wom_p8bxn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wom_p8bxn"/>`,
		"fallback": "file-icons:blender",
	});
}

export default Component;
