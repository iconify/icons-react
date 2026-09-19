import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0pepkxmp.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0pepkxmp"/>`,
		"fallback": "dinkie-icons:black-right-double-triangle-with-vertical-bar",
	});
}

export default Component;
