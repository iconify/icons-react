import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl4i9x41k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl4i9x41k"/>`,
		"fallback": "iconamoon:arrow-top-left-3-square-light",
	});
}

export default Component;
