import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/u9l0xvbmx.css';
import '../../css/j/ji-4p20pf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="u9l0xvbmx"/><path class="ji-4p20pf"/></g>`,
		"fallback": "streamline-plump:hourglass",
	});
}

export default Component;
