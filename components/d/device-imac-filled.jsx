import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyw3bwjwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyw3bwjwo"/>`,
		"fallback": "tabler:device-imac-filled",
	});
}

export default Component;
