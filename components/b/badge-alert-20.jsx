import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1_chib4c.css';
import '../../css/e/ecx-xvdpx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1_chib4c"/><path class="ecx-xvdpx"/>`,
		"fallback": "energy-icons:badge-alert-20",
	});
}

export default Component;
