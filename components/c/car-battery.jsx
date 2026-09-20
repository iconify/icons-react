import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je_6zsb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je_6zsb_d"/>`,
		"fallback": "mdi:car-battery",
	});
}

export default Component;
