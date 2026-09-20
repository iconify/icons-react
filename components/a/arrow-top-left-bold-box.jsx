import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syajy7b6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syajy7b6w"/>`,
		"fallback": "mdi:arrow-top-left-bold-box",
	});
}

export default Component;
