import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k9d4t22sd.css';
import '../../css/o/oepyy1bcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k9d4t22sd"/><path class="oepyy1bcq"/></g>`,
		"fallback": "iconamoon:delivery-free-light",
	});
}

export default Component;
