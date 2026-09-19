import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4d115tme.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4d115tme"/>`,
		"fallback": "fluent-emoji-high-contrast:eyes",
	});
}

export default Component;
