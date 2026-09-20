import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcnf5106n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcnf5106n"/>`,
		"fallback": "mdi:christmas-lights",
	});
}

export default Component;
