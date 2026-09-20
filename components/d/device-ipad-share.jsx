import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7d9_9b3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7d9_9b3f"/>`,
		"fallback": "tabler:device-ipad-share",
	});
}

export default Component;
