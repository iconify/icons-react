import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l0tu1kfap.css';
import '../../css/w/wcd_zjd5x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l0tu1kfap"/><path clip-rule="evenodd" class="wcd_zjd5x"/></g>`,
		"fallback": "streamline-plump-color:3d-coordinate-axis-flat",
	});
}

export default Component;
