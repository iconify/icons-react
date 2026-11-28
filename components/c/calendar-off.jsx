import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj3z4_bks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj3z4_bks"/>`,
		"fallback": "noviair:calendar-off",
	});
}

export default Component;
