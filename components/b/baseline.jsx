import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s6say0-yx.css';
import '../../css/y/yx1qi3ble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s6say0-yx"/><path class="yx1qi3ble"/></g>`,
		"fallback": "hugeicons:baseline",
	});
}

export default Component;
