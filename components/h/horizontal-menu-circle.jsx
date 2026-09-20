import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/b/b1r711bgn.css';
import '../../css/r/ro-oybcdo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="b1r711bgn"/><path class="ro-oybcdo"/></g>`,
		"fallback": "streamline-plump:horizontal-menu-circle",
	});
}

export default Component;
