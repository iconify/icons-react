import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb1oskbsf.css';
import '../../css/e/eu4b83byw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb1oskbsf"/><path class="eu4b83byw"/>`,
		"fallback": "energy-icons:crosshair-20",
	});
}

export default Component;
