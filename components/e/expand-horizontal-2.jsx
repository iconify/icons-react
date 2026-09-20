import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/u6pozt1zx.css';
import '../../css/g/g_o9d2o_f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="u6pozt1zx"/><path class="g_o9d2o_f"/></g>`,
		"fallback": "streamline-plump:expand-horizontal-2",
	});
}

export default Component;
