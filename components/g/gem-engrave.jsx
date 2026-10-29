import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f-uum3e5i.css';
import '../../css/y/y57j-w5pv.css';
import '../../css/r/ru4tp72_w.css';
import '../../css/c/c91spwb6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f-uum3e5i"/><path class="wm-shadow y57j-w5pv"/><path class="ru4tp72_w"/><path class="c91spwb6f"/></g>`,
		"fallback": "withicons:gem-engrave",
	});
}

export default Component;
