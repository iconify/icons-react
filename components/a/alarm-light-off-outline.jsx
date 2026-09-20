import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zefx5bxey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zefx5bxey"/>`,
		"fallback": "mdi:alarm-light-off-outline",
	});
}

export default Component;
