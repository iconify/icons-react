import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r59ckwbcd.css';
import '../../css/l/lr_wwac8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="r59ckwbcd"/><path class="lr_wwac8t wm-a"/></g>`,
		"fallback": "withicons:chart-bar-solid",
	});
}

export default Component;
