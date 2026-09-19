import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnc9p5h0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnc9p5h0d"/>`,
		"fallback": "hugeicons:arrow-down-a-z",
	});
}

export default Component;
