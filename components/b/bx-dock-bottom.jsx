import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzc9bummx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzc9bummx"/>`,
		"fallback": "bx:bx-dock-bottom",
	});
}

export default Component;
