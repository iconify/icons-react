import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/smdh-f6yb.css';
import '../../css/a/a5pojd29f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="smdh-f6yb"/><path class="a5pojd29f"/></g>`,
		"fallback": "healthicons:breast-cancer",
	});
}

export default Component;
