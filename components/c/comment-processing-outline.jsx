import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh-p1r4cs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh-p1r4cs"/>`,
		"fallback": "mdi:comment-processing-outline",
	});
}

export default Component;
