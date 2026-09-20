import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d718p-_-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d718p-_-o"/>`,
		"fallback": "ri:haze-line",
	});
}

export default Component;
