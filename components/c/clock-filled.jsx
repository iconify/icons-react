import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1_6q1b6t.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1_6q1b6t"/>`,
		"fallback": "dinkie-icons:clock-filled",
	});
}

export default Component;
