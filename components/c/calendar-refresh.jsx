import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pus6_rbkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pus6_rbkq"/>`,
		"fallback": "mdi:calendar-refresh",
	});
}

export default Component;
