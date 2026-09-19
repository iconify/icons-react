import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qpi-f4b6v.css';
import '../../css/o/os2xlbcgt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="qpi-f4b6v"/><path class="os2xlbcgt"/></g>`,
		"fallback": "cryptocurrency-color:bcn",
	});
}

export default Component;
