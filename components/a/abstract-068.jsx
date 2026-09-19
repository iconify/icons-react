import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd4n9pdfr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd4n9pdfr"/>`,
		"fallback": "game-icons:abstract-068",
	});
}

export default Component;
