import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onrhkz8ea.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onrhkz8ea"/>`,
		"fallback": "la:headset",
	});
}

export default Component;
