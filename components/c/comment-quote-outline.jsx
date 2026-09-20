import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofzz_rb2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofzz_rb2l"/>`,
		"fallback": "mdi:comment-quote-outline",
	});
}

export default Component;
