import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/udb7_abex.css';
import '../../css/v/vf0luabtr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="udb7_abex"/><path class="vf0luabtr"/></g>`,
		"fallback": "streamline-plump-color:coffee-bean-flat",
	});
}

export default Component;
