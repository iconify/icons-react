import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qo-cleo8d.css';
import '../../css/n/nt8fw_bxa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qo-cleo8d"/><path clip-rule="evenodd" class="nt8fw_bxa"/></g>`,
		"fallback": "healthicons:i-certificate-paper-outline",
	});
}

export default Component;
