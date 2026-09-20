import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro5b2tlle.css';
import '../../css/f/f-vbie9xr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro5b2tlle"/><path class="f-vbie9xr"/>`,
		"fallback": "lineicons:cloud-refresh-clockwise",
	});
}

export default Component;
