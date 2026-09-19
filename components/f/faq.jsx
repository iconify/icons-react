import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4_6p9oov.css';

const viewBox = {"width":897,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4_6p9oov"/>`,
		"fallback": "whh:faq",
	});
}

export default Component;
