import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgmu_kbuw.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgmu_kbuw"/>`,
		"fallback": "dinkie-icons:die-face4-small-filled",
	});
}

export default Component;
