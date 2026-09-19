import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr_8bt_rk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sr_8bt_rk"/>`,
		"fallback": "game-icons:bookmark",
	});
}

export default Component;
