import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_uoiabps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_uoiabps"/>`,
		"fallback": "mynaui:arrow-left-circle-solid",
	});
}

export default Component;
