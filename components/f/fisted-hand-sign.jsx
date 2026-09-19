import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6b8s_bci.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6b8s_bci"/>`,
		"fallback": "dinkie-icons:fisted-hand-sign",
	});
}

export default Component;
