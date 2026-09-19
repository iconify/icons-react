import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1db3edod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1db3edod"/>`,
		"fallback": "cbi:ceiling-round",
	});
}

export default Component;
