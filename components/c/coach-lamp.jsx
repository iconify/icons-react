import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o00-i8b_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o00-i8b_x"/>`,
		"fallback": "mdi:coach-lamp",
	});
}

export default Component;
