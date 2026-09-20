import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm8x86b9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm8x86b9d"/>`,
		"fallback": "mdi-light:content-cut",
	});
}

export default Component;
