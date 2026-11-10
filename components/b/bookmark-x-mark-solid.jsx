import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az_l_5bsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="az_l_5bsj"/>`,
		"fallback": "sidekickicons:bookmark-x-mark-solid",
	});
}

export default Component;
