import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhh-_dwpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhh-_dwpz"/>`,
		"fallback": "eva:close-circle-fill",
	});
}

export default Component;
