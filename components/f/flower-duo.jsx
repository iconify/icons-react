import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb8sggb0m.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pxvp_ztez.css';
import '../../css/i/ij7qju6sg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb8sggb0m secondary"/><g class="dt0cm9dhy primary"><path class="pxvp_ztez"/><circle class="ij7qju6sg"/></g>`,
		"fallback": "iconaut:flower-duo",
	});
}

export default Component;
