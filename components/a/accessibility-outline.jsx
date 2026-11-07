import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqfd3tq5k.css';
import '../../css/s/sc74p3-8j.css';
import '../../css/f/fhxzx1b_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hqfd3tq5k"/><path class="sc74p3-8j"/><path clip-rule="evenodd" class="fhxzx1b_j"/>`,
		"fallback": "solar:accessibility-outline",
	});
}

export default Component;
