import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhuj0nbiy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhuj0nbiy"/>`,
		"fallback": "teenyicons:double-caret-down-small-outline",
	});
}

export default Component;
