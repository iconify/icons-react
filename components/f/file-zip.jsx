import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k1mzqdb1d.css';
import '../../css/x/xk748gddn.css';
import '../../css/y/yntq6xb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k1mzqdb1d"/><path class="xk748gddn"/><path clip-rule="evenodd" class="yntq6xb5c"/></g>`,
		"fallback": "reicon:file-zip",
	});
}

export default Component;
