import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gq8v75mof.css';
import '../../css/d/dc43lbrvg.css';
import '../../css/o/odjqqzb2u.css';
import '../../css/w/wwl35ac3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gq8v75mof"/><path class="dc43lbrvg"/><path class="odjqqzb2u"/><path class="wwl35ac3w"/></g>`,
		"fallback": "streamline-cyber-color:box-1",
	});
}

export default Component;
