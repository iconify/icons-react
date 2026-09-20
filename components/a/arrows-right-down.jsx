import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xr2g5kbko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xr2g5kbko"/>`,
		"fallback": "uil:arrows-right-down",
	});
}

export default Component;
