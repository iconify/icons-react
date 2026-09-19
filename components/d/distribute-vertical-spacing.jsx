import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/t/taetgzrim.css';
import '../../css/w/wg6baqb2y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="taetgzrim"/><path class="wg6baqb2y"/></g>`,
		"fallback": "icon-park-outline:distribute-vertical-spacing",
	});
}

export default Component;
