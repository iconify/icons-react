import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw0d3xbjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw0d3xbjt"/>`,
		"fallback": "streamline-ultimate:human-resources-rating-woman-bold",
	});
}

export default Component;
