import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u11of3imx.css';
import '../../css/k/k8u29ettp.css';
import '../../css/o/ooso77qyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="u11of3imx"/><rect class="k8u29ettp"/><path class="ooso77qyx"/></g>`,
		"fallback": "andrsrxn:app-window",
	});
}

export default Component;
