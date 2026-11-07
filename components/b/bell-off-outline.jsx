import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewr0bdyvc.css';
import '../../css/l/ll7areqdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewr0bdyvc"/><path clip-rule="evenodd" class="ll7areqdp"/>`,
		"fallback": "solar:bell-off-outline",
	});
}

export default Component;
