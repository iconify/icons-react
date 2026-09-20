import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ema37gbyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ema37gbyl"/>`,
		"fallback": "mdi:hexagon-slice-1",
	});
}

export default Component;
