import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whd7w6bie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whd7w6bie"/>`,
		"fallback": "solar:forward-linear",
	});
}

export default Component;
