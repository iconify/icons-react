import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg2_2cs5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg2_2cs5x"/>`,
		"fallback": "hugeicons:alarm-smoke",
	});
}

export default Component;
