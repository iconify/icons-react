import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5e2rrbow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5e2rrbow"/>`,
		"fallback": "cbi:fluval-fx6-logo",
	});
}

export default Component;
