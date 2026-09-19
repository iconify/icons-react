import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/t/t888go1xk.css';
import '../../css/y/yfuxcacdn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="t888go1xk"/><path class="yfuxcacdn"/></g>`,
		"fallback": "icon-park-outline:auto-line-height",
	});
}

export default Component;
