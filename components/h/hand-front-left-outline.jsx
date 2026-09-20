import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib1by3zrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ib1by3zrv"/>`,
		"fallback": "mdi:hand-front-left-outline",
	});
}

export default Component;
