import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/beuh13b9y.css';
import '../../css/p/p53xcyb3q.css';
import '../../css/o/owi5yabmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="beuh13b9y"/><path class="p53xcyb3q"/><path class="owi5yabmz"/></g>`,
		"fallback": "keyline-icons:chart-column-big-sharp-two-tone",
	});
}

export default Component;
