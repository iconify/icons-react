import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/ogppwwbuu.css';
import '../../css/p/pl78pba8t.css';
import '../../css/x/xlgojjcgx.css';
import '../../css/w/wch0ii58t.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ogppwwbuu wm-shadow"/><path class="pl78pba8t wm-shadow"/><path class="xlgojjcgx"/><path class="wch0ii58t"/><path class="vvx5zcbvx wm-s"/></g>`,
		"fallback": "withicons-brutal:bug-off",
	});
}

export default Component;
