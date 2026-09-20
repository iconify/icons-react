import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ondv263yi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ondv263yi"/>`,
		"fallback": "uil:comment-alt-dots",
	});
}

export default Component;
