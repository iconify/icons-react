import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/syf_u_swt.css';
import '../../css/k/kkc0n7hwo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="syf_u_swt"/><path class="kkc0n7hwo"/></g>`,
		"fallback": "streamline-plump-color:empty-clipboard-flat",
	});
}

export default Component;
