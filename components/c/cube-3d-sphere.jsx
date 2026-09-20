import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irqascczb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irqascczb"/>`,
		"fallback": "tabler:cube-3d-sphere",
	});
}

export default Component;
