import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3qfxkbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3qfxkbvv"/>`,
		"fallback": "cbi:ceiling-runner",
	});
}

export default Component;
