import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpva0twia.css';

const viewBox = {"width":480,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpva0twia"/>`,
		"fallback": "file-icons:bors",
	});
}

export default Component;
