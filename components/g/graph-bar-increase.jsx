import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/c/co11bsb3j.css';
import '../../css/q/qj5tj5n2x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="co11bsb3j"/><path class="qj5tj5n2x"/></g>`,
		"fallback": "streamline-plump:graph-bar-increase",
	});
}

export default Component;
