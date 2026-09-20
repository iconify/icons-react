import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe_j1ac2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe_j1ac2i"/>`,
		"fallback": "mdi:ev-plug-ccs1",
	});
}

export default Component;
