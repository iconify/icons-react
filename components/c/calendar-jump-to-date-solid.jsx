import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvs8onhns.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fvs8onhns"/>`,
		"fallback": "streamline:calendar-jump-to-date-solid",
	});
}

export default Component;
