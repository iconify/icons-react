import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs1_jt4ft.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs1_jt4ft"/>`,
		"fallback": "dinkie-icons:adjustments",
	});
}

export default Component;
