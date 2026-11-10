import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vio6kccye.css';
import '../../css/g/gzj3ebk-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vio6kccye"/><path class="gzj3ebk-d"/></g>`,
		"fallback": "andrsrxn:background-dashed",
	});
}

export default Component;
