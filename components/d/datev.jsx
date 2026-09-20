import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjt3j9r5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjt3j9r5p"/>`,
		"fallback": "thesvg:datev",
	});
}

export default Component;
