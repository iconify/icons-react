import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tb-lokb6l.css';
import '../../css/a/aylq6jb2t.css';
import '../../css/j/jdzkfcb6p.css';
import '../../css/y/yfauabbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 21.7 20.02)" class="tb-lokb6l"/><path class="aylq6jb2t"/><rect transform="matrix(0 -1 -1 0 22.29 20.02)" class="jdzkfcb6p"/><path class="yfauabbkv"/></g>`,
		"fallback": "andrsrxn:concierge-bell",
	});
}

export default Component;
