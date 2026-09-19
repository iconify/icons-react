import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3l2b5bal.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3l2b5bal"/>`,
		"fallback": "dinkie-icons:adjustments-filled",
	});
}

export default Component;
