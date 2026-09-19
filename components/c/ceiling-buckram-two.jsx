import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyz9kejrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyz9kejrz"/>`,
		"fallback": "cbi:ceiling-buckram-two",
	});
}

export default Component;
