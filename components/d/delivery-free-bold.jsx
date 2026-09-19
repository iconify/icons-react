import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jasz4gbsh.css';
import '../../css/v/v86k4ib7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jasz4gbsh"/><path class="v86k4ib7i"/></g>`,
		"fallback": "iconamoon:delivery-free-bold",
	});
}

export default Component;
