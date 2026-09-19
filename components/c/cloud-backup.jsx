import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fdqjusb1c.css';
import '../../css/s/se2wykbdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fdqjusb1c"/><path class="se2wykbdm"/></g>`,
		"fallback": "hugeicons:cloud-backup",
	});
}

export default Component;
