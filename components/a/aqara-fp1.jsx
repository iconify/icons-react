import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz7do5bxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz7do5bxu"/>`,
		"fallback": "cbi:aqara-fp1",
	});
}

export default Component;
