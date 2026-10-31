import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cntbxxb-u.css';
import '../../css/g/gxv26u8uu.css';
import '../../css/x/xoxv71b8a.css';
import '../../css/n/n_f1wwbjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="cntbxxb-u wm-shadow"/><path class="gxv26u8uu wm-shadow"/><path class="xoxv71b8a"/><path class="n_f1wwbjf"/></g>`,
		"fallback": "withicons-brutal:door-open",
	});
}

export default Component;
