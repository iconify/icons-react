import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kobzaq9ip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kobzaq9ip"/>`,
		"fallback": "coolicons:bell-ring-fill-round",
	});
}

export default Component;
