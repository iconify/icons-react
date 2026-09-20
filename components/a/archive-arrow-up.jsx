import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2_t1hbgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2_t1hbgg"/>`,
		"fallback": "mdi:archive-arrow-up",
	});
}

export default Component;
