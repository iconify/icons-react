import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsr_drbgn.css';
import '../../css/p/pfaueebia.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsr_drbgn"/><path class="pfaueebia"/>`,
		"fallback": "energy-icons:edit-20-bold",
	});
}

export default Component;
