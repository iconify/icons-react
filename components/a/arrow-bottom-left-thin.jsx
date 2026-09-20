import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fngu76b6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fngu76b6x"/>`,
		"fallback": "mdi:arrow-bottom-left-thin",
	});
}

export default Component;
