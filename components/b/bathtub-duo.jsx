import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbv_ayoio.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xhu3adbgv.css';
import '../../css/o/olf6d1bcx.css';
import '../../css/r/r3k9t2gzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbv_ayoio secondary"/><g class="dt0cm9dhy primary"><path class="xhu3adbgv"/><path class="olf6d1bcx"/><path class="r3k9t2gzb"/></g>`,
		"fallback": "iconaut:bathtub-duo",
	});
}

export default Component;
