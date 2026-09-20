import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc8eo5pxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc8eo5pxr"/>`,
		"fallback": "si:flag-alt-2-line",
	});
}

export default Component;
