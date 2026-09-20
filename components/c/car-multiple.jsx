import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0md93b-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0md93b-r"/>`,
		"fallback": "mdi:car-multiple",
	});
}

export default Component;
