import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybue2s69d.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybue2s69d"/>`,
		"fallback": "fa7-solid:frown",
	});
}

export default Component;
