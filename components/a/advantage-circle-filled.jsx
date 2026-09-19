import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubv59m5ci.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubv59m5ci"/>`,
		"fallback": "dinkie-icons:advantage-circle-filled",
	});
}

export default Component;
