import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wty1f8g4v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wty1f8g4v"/>`,
		"fallback": "heroicons:arrow-turn-down-right-16-solid",
	});
}

export default Component;
