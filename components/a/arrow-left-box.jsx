import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j031vob3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j031vob3m"/>`,
		"fallback": "mdi:arrow-left-box",
	});
}

export default Component;
