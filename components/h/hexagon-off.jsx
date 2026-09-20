import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksa7z7pcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksa7z7pcb"/>`,
		"fallback": "tabler:hexagon-off",
	});
}

export default Component;
