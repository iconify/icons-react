import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycybfzv0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycybfzv0y"/>`,
		"fallback": "ri:anthropic-line",
	});
}

export default Component;
