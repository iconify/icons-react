import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx9dqebgf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx9dqebgf"/>`,
		"fallback": "file-icons:abap",
	});
}

export default Component;
