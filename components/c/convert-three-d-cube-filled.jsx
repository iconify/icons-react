import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v87z958hk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v87z958hk"/>`,
		"fallback": "reicon:convert-three-d-cube-filled",
	});
}

export default Component;
