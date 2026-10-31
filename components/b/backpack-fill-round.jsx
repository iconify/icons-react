import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj2556zno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj2556zno"/>`,
		"fallback": "coolicons:backpack-fill-round",
	});
}

export default Component;
