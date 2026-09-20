import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p14176b6q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p14176b6q"/>`,
		"fallback": "streamline:heading-3-paragraph-styles-heading",
	});
}

export default Component;
