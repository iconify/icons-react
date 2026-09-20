import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izb9fdczk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izb9fdczk"/>`,
		"fallback": "mdi:floppy-disc-move",
	});
}

export default Component;
