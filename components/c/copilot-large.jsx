import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xr0-4kb2q.css';
import '../../css/y/ypyppybok.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xr0-4kb2q"/><path class="ypyppybok"/></g>`,
		"fallback": "codicon:copilot-large",
	});
}

export default Component;
