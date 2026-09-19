import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr85l6q2m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr85l6q2m"/>`,
		"fallback": "at-icons:cursor",
	});
}

export default Component;
