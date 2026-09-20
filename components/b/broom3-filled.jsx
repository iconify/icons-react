import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bllci6bwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bllci6bwm"/>`,
		"fallback": "reicon:broom3-filled",
	});
}

export default Component;
