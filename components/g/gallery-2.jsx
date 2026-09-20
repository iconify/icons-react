import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/x/xjb_7qblo.css';
import '../../css/d/ddt6ntblg.css';
import '../../css/u/ubm2t3byj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="xjb_7qblo"/><path class="ddt6ntblg"/><path class="ubm2t3byj"/></g>`,
		"fallback": "streamline-plump:gallery-2",
	});
}

export default Component;
