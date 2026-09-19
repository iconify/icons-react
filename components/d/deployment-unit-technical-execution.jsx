import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewxs8lclm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewxs8lclm"/>`,
		"fallback": "carbon:deployment-unit-technical-execution",
	});
}

export default Component;
