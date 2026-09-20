import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whhv1p9qk.css';
import '../../css/d/d0a5okbgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="whhv1p9qk"/><path class="d0a5okbgh"/></g>`,
		"fallback": "lets-icons:chart-alt-duotone",
	});
}

export default Component;
