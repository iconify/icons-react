import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jiv1j9a1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jiv1j9a1m"/>`,
		"fallback": "noviair-light:file-video-plus",
	});
}

export default Component;
