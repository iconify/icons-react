import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fka5i5bun.css';
import '../../css/w/wfbp_rb6j.css';
import '../../css/e/ew1brccxv.css';
import '../../css/n/nk2ku8bgk.css';

const viewBox = {"width":290,"height":85};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fka5i5bun"/><path class="wfbp_rb6j"/><path class="ew1brccxv"/><path class="nk2ku8bgk"/>`,
		"fallback": "thesvg-color:ben-and-jerrys",
	});
}

export default Component;
