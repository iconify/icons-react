import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwtv-rx-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwtv-rx-r"/>`,
		"fallback": "boxicons:bell-ring",
	});
}

export default Component;
