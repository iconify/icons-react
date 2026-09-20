import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjcww6b2k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjcww6b2k"/>`,
		"fallback": "la:i-cursor",
	});
}

export default Component;
