import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svl-a4biq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svl-a4biq"/>`,
		"fallback": "mdi:comma-box",
	});
}

export default Component;
