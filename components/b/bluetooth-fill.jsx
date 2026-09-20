import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn--p_9ji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn--p_9ji"/>`,
		"fallback": "si:bluetooth-fill",
	});
}

export default Component;
