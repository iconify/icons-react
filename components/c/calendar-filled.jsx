import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huuz7bb3t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huuz7bb3t"/>`,
		"fallback": "ix:calendar-filled",
	});
}

export default Component;
