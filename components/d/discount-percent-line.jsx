import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkof6pkkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkof6pkkr"/>`,
		"fallback": "ri:discount-percent-line",
	});
}

export default Component;
