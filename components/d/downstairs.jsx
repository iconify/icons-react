import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydd9u8zty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydd9u8zty"/>`,
		"fallback": "cbi:downstairs",
	});
}

export default Component;
