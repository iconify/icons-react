import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k__ivvbfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k__ivvbfi"/>`,
		"fallback": "streamline-ultimate:firework-2-bold",
	});
}

export default Component;
