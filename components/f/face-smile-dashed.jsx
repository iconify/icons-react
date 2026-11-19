import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2bmsqbnm.css';
import '../../css/c/cqc0wxbsk.css';
import '../../css/w/wrnuj8bao.css';
import '../../css/t/tbj183btg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="g2bmsqbnm"/><path class="cqc0wxbsk"/><path class="wrnuj8bao"/><path class="tbj183btg"/></g>`,
		"fallback": "andrsrxn:face-smile-dashed",
	});
}

export default Component;
