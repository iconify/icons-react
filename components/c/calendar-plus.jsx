import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq6x3_7zg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq6x3_7zg"/>`,
		"fallback": "sidekickicons:calendar-plus",
	});
}

export default Component;
