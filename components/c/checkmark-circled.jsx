import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs6xwiblw.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs6xwiblw"/>`,
		"fallback": "dinkie-icons:checkmark-circled",
	});
}

export default Component;
