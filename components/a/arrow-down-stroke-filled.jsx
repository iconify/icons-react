import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awuzu-b2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awuzu-b2k"/>`,
		"fallback": "boxicons:arrow-down-stroke-filled",
	});
}

export default Component;
