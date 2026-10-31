import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xxy4eau_a.css';
import '../../css/u/uujgzzyfl.css';
import '../../css/v/vbv7rtodc.css';
import '../../css/y/ys__tvd6q.css';
import '../../css/h/h5s7pdbmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow xxy4eau_a"/><path class="uujgzzyfl wm-shadow"/><path class="vbv7rtodc"/><path class="ys__tvd6q"/><path class="h5s7pdbmv"/></g>`,
		"fallback": "withicons-brutal:file-image",
	});
}

export default Component;
