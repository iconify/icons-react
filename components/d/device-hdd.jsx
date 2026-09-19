import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qxbr31b0h.css';
import '../../css/h/hswojb3hz.css';
import '../../css/q/qznqlw_ir.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qxbr31b0h"/><path class="hswojb3hz"/><path class="qznqlw_ir"/></g>`,
		"fallback": "bi:device-hdd",
	});
}

export default Component;
