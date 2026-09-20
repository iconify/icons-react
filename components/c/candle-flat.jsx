import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ogscsvbfq.css';
import '../../css/m/mgus_xg_d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ogscsvbfq"/><path class="mgus_xg_d"/></g>`,
		"fallback": "streamline-plump-color:candle-flat",
	});
}

export default Component;
