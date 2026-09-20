import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7j9fnbeb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7j9fnbeb"/>`,
		"fallback": "la:app-store",
	});
}

export default Component;
