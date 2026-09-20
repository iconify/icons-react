import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_gb48rxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c_gb48rxr"/>`,
		"fallback": "solar:cursor-outline",
	});
}

export default Component;
