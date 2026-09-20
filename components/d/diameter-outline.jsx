import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnq331bdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnq331bdq"/>`,
		"fallback": "mdi:diameter-outline",
	});
}

export default Component;
