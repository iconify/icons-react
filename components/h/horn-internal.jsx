import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw_x7sqyd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw_x7sqyd"/>`,
		"fallback": "game-icons:horn-internal",
	});
}

export default Component;
