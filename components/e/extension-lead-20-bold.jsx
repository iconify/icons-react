import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqyen_7is.css';
import '../../css/c/cj85dubro.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqyen_7is"/><path class="cj85dubro"/>`,
		"fallback": "energy-icons:extension-lead-20-bold",
	});
}

export default Component;
