import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mav6eubkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mav6eubkl"/>`,
		"fallback": "reicon:call-calling-filled",
	});
}

export default Component;
