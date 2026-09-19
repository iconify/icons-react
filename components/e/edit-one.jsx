import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/r/rak7ltbwt.css';
import '../../css/o/oi_or9w5w.css';
import '../../css/y/y4y7fgbwm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="rak7ltbwt"/><path class="oi_or9w5w"/><path class="y4y7fgbwm"/></g>`,
		"fallback": "icon-park-outline:edit-one",
	});
}

export default Component;
