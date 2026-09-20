import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlx5a_q8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlx5a_q8h"/>`,
		"fallback": "majesticons:comment-2-text-line",
	});
}

export default Component;
