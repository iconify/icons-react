import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa0d8lorg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa0d8lorg"/>`,
		"fallback": "keyline-icons:face-expressionless-fill",
	});
}

export default Component;
