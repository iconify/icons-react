import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v86opfbei.css';
import '../../css/o/o-95uknwh.css';
import '../../css/v/v37j273ut.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v86opfbei"/><path class="o-95uknwh"/><path class="v37j273ut"/></g>`,
		"fallback": "streamline-color:dangerous-zone-sign",
	});
}

export default Component;
