import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc5iqbbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc5iqbbjy"/>`,
		"fallback": "tabler:device-watch-stats",
	});
}

export default Component;
