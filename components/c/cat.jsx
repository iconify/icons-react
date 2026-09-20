import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bc-x7obgt.css';
import '../../css/a/adfatdb-x.css';
import '../../css/a/adrmq1-1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bc-x7obgt"/><path class="adfatdb-x"/><path class="adrmq1-1o"/></g>`,
		"fallback": "tdesign:cat",
	});
}

export default Component;
