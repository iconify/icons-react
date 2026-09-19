import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f0pudkcfc.css';
import '../../css/v/valc7vigf.css';
import '../../css/y/yye_5v80t.css';

const viewBox = {"width":301,"height":227};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f0pudkcfc"/><path class="valc7vigf"/><path class="yye_5v80t"/></g>`,
		"fallback": "cif:dk",
	});
}

export default Component;
