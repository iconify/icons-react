import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p2u0h5sqe.css';
import '../../css/y/ymcmynbmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p2u0h5sqe"/><path class="ymcmynbmi"/></g>`,
		"fallback": "gg:distribute-horizontal",
	});
}

export default Component;
