import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io0rh2bye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io0rh2bye"/>`,
		"fallback": "iconoir:cut",
	});
}

export default Component;
