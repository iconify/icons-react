import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb3z14vnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb3z14vnz"/>`,
		"fallback": "guidance:escalator-down-arrow",
	});
}

export default Component;
