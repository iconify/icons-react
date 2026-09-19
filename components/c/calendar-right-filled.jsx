import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3qqddbnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e3qqddbnw"/>`,
		"fallback": "griddy-icons:calendar-right-filled",
	});
}

export default Component;
