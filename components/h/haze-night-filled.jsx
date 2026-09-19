import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxj_t4hmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nxj_t4hmi"/>`,
		"fallback": "griddy-icons:haze-night-filled",
	});
}

export default Component;
