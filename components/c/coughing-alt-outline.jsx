import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ttsgbty3f.css';
import '../../css/r/rkn7cdc2p.css';
import '../../css/m/mow6e1kbh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ttsgbty3f"/><path class="rkn7cdc2p"/><path clip-rule="evenodd" class="mow6e1kbh"/></g>`,
		"fallback": "healthicons:coughing-alt-outline",
	});
}

export default Component;
