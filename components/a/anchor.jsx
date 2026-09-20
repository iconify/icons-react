import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6ibt5u2l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6ibt5u2l"/>`,
		"fallback": "streamline-flex-color:anchor",
	});
}

export default Component;
