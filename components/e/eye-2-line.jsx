import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czh9g6o2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czh9g6o2n"/>`,
		"fallback": "ri:eye-2-line",
	});
}

export default Component;
