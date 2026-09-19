import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpdpley1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpdpley1n"/>`,
		"fallback": "eos-icons:edge-computing-outlined",
	});
}

export default Component;
