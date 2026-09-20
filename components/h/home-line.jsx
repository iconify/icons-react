import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjn0tzf9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjn0tzf9g"/>`,
		"fallback": "ri:home-line",
	});
}

export default Component;
