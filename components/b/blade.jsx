import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvgdg2apg.css';
import '../../css/i/ikqvnnbxe.css';
import '../../css/c/co27a8zen.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xvgdg2apg"/><circle class="ikqvnnbxe"/><path class="co27a8zen"/></g>`,
		"fallback": "icon-park-outline:blade",
	});
}

export default Component;
