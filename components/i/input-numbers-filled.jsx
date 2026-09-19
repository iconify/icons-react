import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci5k5y4ca.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci5k5y4ca"/>`,
		"fallback": "dinkie-icons:input-numbers-filled",
	});
}

export default Component;
