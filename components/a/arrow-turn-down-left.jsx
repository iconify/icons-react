import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pglrz1amb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pglrz1amb"/>`,
		"fallback": "at-icons:arrow-turn-down-left",
	});
}

export default Component;
