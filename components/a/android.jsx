import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea9p51llh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea9p51llh"/>`,
		"fallback": "mdi:android",
	});
}

export default Component;
