import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyiugab0d.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyiugab0d"/>`,
		"fallback": "dinkie-icons:die-face1",
	});
}

export default Component;
