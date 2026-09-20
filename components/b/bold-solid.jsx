import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs17w9b8u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs17w9b8u"/>`,
		"fallback": "la:bold-solid",
	});
}

export default Component;
