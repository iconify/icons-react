import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk_up-b-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk_up-b-r"/>`,
		"fallback": "tabler:device-ipad-horizontal-check",
	});
}

export default Component;
