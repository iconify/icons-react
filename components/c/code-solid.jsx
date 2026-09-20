import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g90uvabgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g90uvabgl"/>`,
		"fallback": "mynaui:code-solid",
	});
}

export default Component;
