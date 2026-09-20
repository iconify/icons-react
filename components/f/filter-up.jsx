import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr-fs73ok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rr-fs73ok"/>`,
		"fallback": "tabler:filter-up",
	});
}

export default Component;
