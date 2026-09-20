import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8t4l7sis.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w8t4l7sis"/>`,
		"fallback": "streamline:heading-2-paragraph-styles-heading-solid",
	});
}

export default Component;
