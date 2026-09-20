import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6oqqub9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6oqqub9j"/>`,
		"fallback": "ri:corner-down-left-fill",
	});
}

export default Component;
