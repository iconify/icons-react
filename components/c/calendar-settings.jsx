import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma32ezb6c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma32ezb6c"/>`,
		"fallback": "ix:calendar-settings",
	});
}

export default Component;
