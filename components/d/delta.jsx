import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d33quob0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d33quob0z"/>`,
		"fallback": "simple-icons:delta",
	});
}

export default Component;
