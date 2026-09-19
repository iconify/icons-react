import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skqg7ttpt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skqg7ttpt"/>`,
		"fallback": "fa7-brands:battle-net",
	});
}

export default Component;
