import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n09ipgd9w.css';
import '../../css/k/ky3p1qa5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n09ipgd9w"/><path class="ky3p1qa5e"/>`,
		"fallback": "streamline-ultimate:camera-display-bold",
	});
}

export default Component;
