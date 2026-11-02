import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypq3tbc2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypq3tbc2d"/>`,
		"fallback": "mingcute:finger-tap-line",
	});
}

export default Component;
