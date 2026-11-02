import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/saw8j727d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="saw8j727d"/>`,
		"fallback": "mingcute:bluesky-social-line",
	});
}

export default Component;
