import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cltl31bns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cltl31bns"/>`,
		"fallback": "tabler:chart-pie-3-filled",
	});
}

export default Component;
