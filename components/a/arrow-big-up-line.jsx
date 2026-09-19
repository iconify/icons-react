import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyi5vz6mm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyi5vz6mm"/>`,
		"fallback": "boxicons:arrow-big-up-line",
	});
}

export default Component;
