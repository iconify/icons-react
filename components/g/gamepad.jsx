import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w44eh704i.css';
import '../../css/e/es51-ybzb.css';
import '../../css/d/dl-d09bou.css';
import '../../css/c/c_cphdcwi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="w44eh704i"/><circle class="es51-ybzb"/><circle class="dl-d09bou"/><path class="c_cphdcwi"/></g>`,
		"fallback": "icon-park-outline:gamepad",
	});
}

export default Component;
