import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq3o7-bqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq3o7-bqh"/>`,
		"fallback": "noviair-light:file-text-x",
	});
}

export default Component;
