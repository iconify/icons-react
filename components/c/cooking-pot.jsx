import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bpsb1w_-w.css';
import '../../css/x/xhc0plb4l.css';
import '../../css/i/iqmhatbpx.css';
import '../../css/t/td05xox3u.css';
import '../../css/y/yy2dkybji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="bpsb1w_-w wm-shadow"/><path class="wm-shadow xhc0plb4l"/><path class="iqmhatbpx"/><path class="td05xox3u"/><path class="yy2dkybji"/></g>`,
		"fallback": "withicons-brutal:cooking-pot",
	});
}

export default Component;
