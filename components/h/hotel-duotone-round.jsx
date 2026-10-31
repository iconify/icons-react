import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tjkod6arc.css';
import '../../css/q/qra6f8bsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tjkod6arc"/><path class="qra6f8bsx"/></g>`,
		"fallback": "coolicons:hotel-duotone-round",
	});
}

export default Component;
