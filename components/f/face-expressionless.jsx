import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eanpit8oj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eanpit8oj"/>`,
		"fallback": "keyline-icons:face-expressionless",
	});
}

export default Component;
