import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq2fpc9nl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq2fpc9nl"/>`,
		"fallback": "mdi:cloud-refresh",
	});
}

export default Component;
