import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xxq-f2ctj.css';
import '../../css/t/tgu1ydvfg.css';
import '../../css/q/qfv_1c3oe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xxq-f2ctj"/><path class="tgu1ydvfg"/><path class="qfv_1c3oe"/></g>`,
		"fallback": "iconamoon:3d-duotone",
	});
}

export default Component;
