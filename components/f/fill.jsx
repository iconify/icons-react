import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoxo5y0ru.css';
import '../../css/n/nxz2d6bqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoxo5y0ru"/><path class="nxz2d6bqs"/>`,
		"fallback": "mdi:fill",
	});
}

export default Component;
