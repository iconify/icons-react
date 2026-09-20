import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pbiwqgbgr.css';
import '../../css/j/jmlb0-hsj.css';
import '../../css/s/sskuxg8yk.css';
import '../../css/p/pue7mxb_s.css';
import '../../css/r/rn6eu0bsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pbiwqgbgr"/><path class="jmlb0-hsj"/><path class="sskuxg8yk"/><path class="pue7mxb_s"/><path class="rn6eu0bsr"/></g>`,
		"fallback": "streamline-ultimate-color:charging-battery-medium-1",
	});
}

export default Component;
