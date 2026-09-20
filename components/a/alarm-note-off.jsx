import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvy456baf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvy456baf"/>`,
		"fallback": "mdi:alarm-note-off",
	});
}

export default Component;
