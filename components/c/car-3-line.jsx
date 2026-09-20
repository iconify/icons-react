import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcw6geb7z.css';
import '../../css/k/k6tg6_vxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcw6geb7z"/><path class="k6tg6_vxt"/>`,
		"fallback": "mingcute:car-3-line",
	});
}

export default Component;
