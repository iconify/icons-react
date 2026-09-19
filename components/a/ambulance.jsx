import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/alo-h7bmj.css';
import '../../css/b/bxhrv3bpw.css';
import '../../css/q/q0-dmmbeh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="alo-h7bmj"/><path clip-rule="evenodd" class="bxhrv3bpw"/><path class="q0-dmmbeh"/></g>`,
		"fallback": "healthicons:ambulance",
	});
}

export default Component;
