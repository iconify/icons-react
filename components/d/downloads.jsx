import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ids20-b_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ids20-b_z"/>`,
		"fallback": "mdi:downloads",
	});
}

export default Component;
