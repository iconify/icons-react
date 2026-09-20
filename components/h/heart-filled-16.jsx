import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi4ot5f0o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi4ot5f0o"/>`,
		"fallback": "qlementine-icons:heart-filled-16",
	});
}

export default Component;
