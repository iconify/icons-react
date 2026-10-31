import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uakihh5sg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uakihh5sg"/>`,
		"fallback": "coolicons:arrow-u-turn-down-left-bulk-round",
	});
}

export default Component;
