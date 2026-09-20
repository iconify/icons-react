import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyybk_84w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyybk_84w"/>`,
		"fallback": "mdi:arrow-u-down-right",
	});
}

export default Component;
