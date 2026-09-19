import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8d_ulb3e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8d_ulb3e"/>`,
		"fallback": "file-icons:imba-old",
	});
}

export default Component;
