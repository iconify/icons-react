import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whi__xh_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whi__xh_m"/>`,
		"fallback": "tabler:ad-circle-filled",
	});
}

export default Component;
