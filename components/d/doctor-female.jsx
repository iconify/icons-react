import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/icewmop0r.css';
import '../../css/m/m8url67bk.css';
import '../../css/q/qohqnvbfg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="icewmop0r"/><path class="m8url67bk"/><path class="qohqnvbfg"/></g>`,
		"fallback": "healthicons:doctor-female",
	});
}

export default Component;
