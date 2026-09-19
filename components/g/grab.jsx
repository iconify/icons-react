import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v20lpbcwm.css';

const viewBox = {"width":680,"height":694};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v20lpbcwm"/>`,
		"fallback": "ls:grab",
	});
}

export default Component;
