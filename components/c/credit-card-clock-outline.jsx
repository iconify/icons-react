import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc00k61ms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc00k61ms"/>`,
		"fallback": "mdi:credit-card-clock-outline",
	});
}

export default Component;
