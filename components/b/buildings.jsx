import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj3r937ka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj3r937ka"/>`,
		"fallback": "keyline-icons:buildings",
	});
}

export default Component;
