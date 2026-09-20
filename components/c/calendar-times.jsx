import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1fsbgbhg.css';
import '../../css/a/aned6khuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1fsbgbhg"/><path class="aned6khuj"/>`,
		"fallback": "prime:calendar-times",
	});
}

export default Component;
