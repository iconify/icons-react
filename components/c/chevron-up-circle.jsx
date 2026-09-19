import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi9p0vbyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi9p0vbyv"/>`,
		"fallback": "bxs:chevron-up-circle",
	});
}

export default Component;
