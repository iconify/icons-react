import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q33dsdzhi.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q33dsdzhi"/>`,
		"fallback": "pullo:bookmark-simple-slash-light",
	});
}

export default Component;
