import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5flr_e7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c5flr_e7v"/>`,
		"fallback": "sidekickicons:calendar-plus-solid",
	});
}

export default Component;
