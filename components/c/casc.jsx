import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxn7l67aj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxn7l67aj"/>`,
		"fallback": "file-icons:casc",
	});
}

export default Component;
