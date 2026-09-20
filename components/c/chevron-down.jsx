import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq1trvbef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq1trvbef"/>`,
		"fallback": "mi:chevron-down",
	});
}

export default Component;
