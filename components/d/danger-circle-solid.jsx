import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj6-x_bdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj6-x_bdv"/>`,
		"fallback": "mynaui:danger-circle-solid",
	});
}

export default Component;
