import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi8s1omqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi8s1omqf"/>`,
		"fallback": "ri:file-ai-2-line",
	});
}

export default Component;
