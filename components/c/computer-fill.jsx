import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd67zp7vz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd67zp7vz"/>`,
		"fallback": "mingcute:computer-fill",
	});
}

export default Component;
