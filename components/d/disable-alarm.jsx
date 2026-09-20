import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/d/dgsbfbclr.css';
import '../../css/e/e_scokm3d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="dgsbfbclr"/><path class="e_scokm3d"/></g>`,
		"fallback": "streamline-plump:disable-alarm",
	});
}

export default Component;
