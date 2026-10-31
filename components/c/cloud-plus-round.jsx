import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbwo-2beu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbwo-2beu"/>`,
		"fallback": "coolicons:cloud-plus-round",
	});
}

export default Component;
