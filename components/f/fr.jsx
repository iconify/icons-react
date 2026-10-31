import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqd-51b3s.css';
import '../../css/p/ppr3qgb7f.css';
import '../../css/r/r8etlgiam.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yqd-51b3s"/><path class="ppr3qgb7f"/><path class="r8etlgiam"/></g>`,
		"fallback": "cif:fr",
	});
}

export default Component;
