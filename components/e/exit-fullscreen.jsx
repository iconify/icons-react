import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8kuy1ofz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8kuy1ofz"/>`,
		"fallback": "ooui:exit-fullscreen",
	});
}

export default Component;
