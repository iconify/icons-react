import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvkw6gb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kvkw6gb6e"/>`,
		"fallback": "griddy-icons:calendar-plus",
	});
}

export default Component;
