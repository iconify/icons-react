import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae8y8wkyc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae8y8wkyc"/>`,
		"fallback": "game-icons:gym-bag",
	});
}

export default Component;
