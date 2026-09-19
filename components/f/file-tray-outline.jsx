import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzjqs1bbd.css';
import '../../css/k/kx75bricy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzjqs1bbd"/><path class="kx75bricy"/>`,
		"fallback": "ion:file-tray-outline",
	});
}

export default Component;
