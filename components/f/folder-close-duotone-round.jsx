import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kmz4y5uqt.css';
import '../../css/w/w6wq7ob2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kmz4y5uqt"/><path class="w6wq7ob2y"/></g>`,
		"fallback": "coolicons:folder-close-duotone-round",
	});
}

export default Component;
