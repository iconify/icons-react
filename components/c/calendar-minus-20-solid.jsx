import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9y95dbrq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t9y95dbrq"/>`,
		"fallback": "sidekickicons:calendar-minus-20-solid",
	});
}

export default Component;
