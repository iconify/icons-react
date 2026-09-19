import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djhlq8b0l.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djhlq8b0l"/>`,
		"fallback": "f7:arrowshape-turn-up-right-circle-fill",
	});
}

export default Component;
