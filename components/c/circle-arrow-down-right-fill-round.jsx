import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5_5al_xm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5_5al_xm"/>`,
		"fallback": "coolicons:circle-arrow-down-right-fill-round",
	});
}

export default Component;
