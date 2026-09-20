import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/o/o_2q90b0x.css';
import '../../css/k/kg437qblz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="o_2q90b0x"/><path class="kg437qblz"/></g>`,
		"fallback": "streamline-plump:color-picker",
	});
}

export default Component;
