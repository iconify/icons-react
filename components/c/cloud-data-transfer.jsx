import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/t/tetfb2btu.css';
import '../../css/i/irgek0igd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="tetfb2btu"/><path class="irgek0igd"/></g>`,
		"fallback": "streamline-plump:cloud-data-transfer",
	});
}

export default Component;
