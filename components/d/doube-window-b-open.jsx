import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfajulefx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfajulefx"/>`,
		"fallback": "cbi:doube-window-b-open",
	});
}

export default Component;
