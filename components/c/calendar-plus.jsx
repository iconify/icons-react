import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1fsbgbhg.css';
import '../../css/e/ezh8crbqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1fsbgbhg"/><path class="ezh8crbqw"/>`,
		"fallback": "prime:calendar-plus",
	});
}

export default Component;
