import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq2yzttin.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq2yzttin"/>`,
		"fallback": "streamline:heading-1-paragraph-styles-heading",
	});
}

export default Component;
