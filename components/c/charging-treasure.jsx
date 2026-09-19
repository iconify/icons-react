import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jf2qnkbaa.css';
import '../../css/m/mrepuub9y.css';
import '../../css/v/vy_-jtanz.css';
import '../../css/j/j3e_45kih.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jf2qnkbaa"/><rect class="mrepuub9y"/><rect class="vy_-jtanz"/><path class="j3e_45kih"/></g>`,
		"fallback": "icon-park-outline:charging-treasure",
	});
}

export default Component;
