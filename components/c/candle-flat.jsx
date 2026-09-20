import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_ccb5b1n.css';
import '../../css/u/ueabxf94h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x_ccb5b1n"/><path class="ueabxf94h"/></g>`,
		"fallback": "streamline-sharp-color:candle-flat",
	});
}

export default Component;
