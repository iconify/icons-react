import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyvtfptam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyvtfptam"/>`,
		"fallback": "uil:comment-search",
	});
}

export default Component;
