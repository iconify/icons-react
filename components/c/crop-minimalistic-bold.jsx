import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8av0wb5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q8av0wb5i"/>`,
		"fallback": "solar:crop-minimalistic-bold",
	});
}

export default Component;
