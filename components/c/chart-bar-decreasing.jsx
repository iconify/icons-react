import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/owdh5nbuy.css';
import '../../css/r/r-m662bys.css';
import '../../css/n/nktcn_w5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="owdh5nbuy wm-shadow"/><path class="r-m662bys wm-shadow"/><path class="nktcn_w5u"/></g>`,
		"fallback": "withicons-brutal:chart-bar-decreasing",
	});
}

export default Component;
