import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4z6z2bit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4z6z2bit"/>`,
		"fallback": "mdi:developer-board",
	});
}

export default Component;
