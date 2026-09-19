import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufuq57bcj.css';
import '../../css/t/t8y2ocbpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufuq57bcj"/><path class="t8y2ocbpg"/>`,
		"fallback": "circum:calendar-date",
	});
}

export default Component;
