import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqohbbb4e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqohbbb4e"/>`,
		"fallback": "game-icons:abstract-031",
	});
}

export default Component;
