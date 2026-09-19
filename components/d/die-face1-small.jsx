import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v46coki7f.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v46coki7f"/>`,
		"fallback": "dinkie-icons:die-face1-small",
	});
}

export default Component;
