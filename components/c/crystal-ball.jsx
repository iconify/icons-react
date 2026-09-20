import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm5_z2x2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm5_z2x2z"/>`,
		"fallback": "mdi:crystal-ball",
	});
}

export default Component;
