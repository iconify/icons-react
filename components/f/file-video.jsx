import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xxy4eau_a.css';
import '../../css/u/uujgzzyfl.css';
import '../../css/s/sgado3bpp.css';
import '../../css/z/z6n1rvbug.css';
import '../../css/h/h_dcacymh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow xxy4eau_a"/><path class="uujgzzyfl wm-shadow"/><path class="sgado3bpp"/><path class="z6n1rvbug"/><path class="h_dcacymh"/></g>`,
		"fallback": "withicons-brutal:file-video",
	});
}

export default Component;
