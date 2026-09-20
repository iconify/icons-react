import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izgte8b0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izgte8b0d"/>`,
		"fallback": "streamline-ultimate:bus-1-bold",
	});
}

export default Component;
