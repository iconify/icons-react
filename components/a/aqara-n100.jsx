import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwiw72nap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwiw72nap"/>`,
		"fallback": "cbi:aqara-n100",
	});
}

export default Component;
