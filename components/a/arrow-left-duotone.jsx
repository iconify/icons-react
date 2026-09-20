import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3do4co6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3do4co6k"/>`,
		"fallback": "si:arrow-left-duotone",
	});
}

export default Component;
