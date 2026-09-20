import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8tttibte.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c8tttibte"/>`,
		"fallback": "ix:calendar-week-filled",
	});
}

export default Component;
