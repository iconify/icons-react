import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vpiexkbzr.css';
import '../../css/o/o2cwdor8r.css';
import '../../css/s/s-wrx8p7w.css';
import '../../css/m/m2c0gebcs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vpiexkbzr"/><path class="o2cwdor8r"/><path class="s-wrx8p7w"/><circle class="m2c0gebcs"/></g>`,
		"fallback": "icon-park-solid:fire-extinguisher",
	});
}

export default Component;
