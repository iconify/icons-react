import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkfjl_8-j.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkfjl_8-j"/>`,
		"fallback": "fa-solid:football-ball",
	});
}

export default Component;
