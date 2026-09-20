import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/byn9tabpz.css';
import '../../css/k/k9tsmxcpg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="byn9tabpz"/><path class="k9tsmxcpg"/></g>`,
		"fallback": "streamline-flex-color:battery-medium-1",
	});
}

export default Component;
