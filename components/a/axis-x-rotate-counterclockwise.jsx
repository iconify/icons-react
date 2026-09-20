import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak8qh_69j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak8qh_69j"/>`,
		"fallback": "mdi:axis-x-rotate-counterclockwise",
	});
}

export default Component;
