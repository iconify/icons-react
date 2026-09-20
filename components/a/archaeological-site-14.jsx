import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czr71fe0h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czr71fe0h"/>`,
		"fallback": "osmic:archaeological-site-14",
	});
}

export default Component;
