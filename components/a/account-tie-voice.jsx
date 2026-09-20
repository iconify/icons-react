import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnjf2ccpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnjf2ccpk"/>`,
		"fallback": "mdi:account-tie-voice",
	});
}

export default Component;
