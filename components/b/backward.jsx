import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szc-0q-at.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szc-0q-at"/>`,
		"fallback": "la:backward",
	});
}

export default Component;
