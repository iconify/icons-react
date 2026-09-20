import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3vhv3bxo.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3vhv3bxo"/>`,
		"fallback": "system-uicons:funnel",
	});
}

export default Component;
