import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-a8ibbxe.css';
import '../../css/y/y2bl_ob4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-a8ibbxe"/><path clip-rule="evenodd" class="y2bl_ob4g"/>`,
		"fallback": "solar:dialog-bold",
	});
}

export default Component;
