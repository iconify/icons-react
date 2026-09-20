import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bxu-ixbxe.css';
import '../../css/v/v8vm-z-vm.css';
import '../../css/x/xwni9mcbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bxu-ixbxe"/><path class="v8vm-z-vm"/><circle class="xwni9mcbw"/></g>`,
		"fallback": "proicons:bell-dot",
	});
}

export default Component;
