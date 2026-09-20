import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzkw3y5rh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzkw3y5rh"/>`,
		"fallback": "mynaui:forward-square-solid",
	});
}

export default Component;
