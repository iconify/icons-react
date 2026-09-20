import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/nvj3ewbsi.css';
import '../../css/l/ll4xltmbe.css';
import '../../css/o/oytdpybsc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="nvj3ewbsi"/><path class="ll4xltmbe"/><path class="oytdpybsc"/></g>`,
		"fallback": "streamline-plump:global-warming-2",
	});
}

export default Component;
