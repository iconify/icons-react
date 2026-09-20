import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anm0x9kwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anm0x9kwm"/>`,
		"fallback": "mdi:calendar-blank-multiple",
	});
}

export default Component;
