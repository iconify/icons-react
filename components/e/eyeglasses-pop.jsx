import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ug4q0kp-p.css';
import '../../css/k/ka2c7mgvz.css';
import '../../css/i/i3adw-gni.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ug4q0kp-p"/><path class="ka2c7mgvz"/><path class="i3adw-gni"/></g>`,
		"fallback": "streamline-kameleon-color:eyeglasses-pop",
	});
}

export default Component;
