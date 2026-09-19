import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l704x-bey.css';

const viewBox = {"width":440,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l704x-bey"/>`,
		"fallback": "fa-brands:cuttlefish",
	});
}

export default Component;
