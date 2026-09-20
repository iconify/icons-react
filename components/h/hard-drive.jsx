import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qs2imsbdv.css';
import '../../css/e/etgqoabtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qs2imsbdv"/><circle class="etgqoabtf"/></g>`,
		"fallback": "proicons:hard-drive",
	});
}

export default Component;
