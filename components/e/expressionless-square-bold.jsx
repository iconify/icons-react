import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlkqo4fwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xlkqo4fwe"/>`,
		"fallback": "solar:expressionless-square-bold",
	});
}

export default Component;
