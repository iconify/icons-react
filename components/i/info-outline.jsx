import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohosmig-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohosmig-k"/>`,
		"fallback": "gridicons:info-outline",
	});
}

export default Component;
