import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywii24byx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywii24byx"/>`,
		"fallback": "mdi:bunny-outline",
	});
}

export default Component;
