import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewb1r_bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewb1r_bgk"/>`,
		"fallback": "tabler:device-laptop-off",
	});
}

export default Component;
