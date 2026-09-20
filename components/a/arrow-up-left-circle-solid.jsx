import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehnoqfa_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehnoqfa_c"/>`,
		"fallback": "mynaui:arrow-up-left-circle-solid",
	});
}

export default Component;
