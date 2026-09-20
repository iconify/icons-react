import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my0dy7qzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my0dy7qzv"/>`,
		"fallback": "mdi:fan",
	});
}

export default Component;
