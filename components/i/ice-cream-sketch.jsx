import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x1a8p8bbx.css';
import '../../css/x/xeipbgbue.css';
import '../../css/c/cdyj0qbkl.css';
import '../../css/l/ll5-hyzyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="x1a8p8bbx"/><path class="wm-a xeipbgbue"/><path class="cdyj0qbkl wm-k"/><path class="ll5-hyzyo wm-a"/></g>`,
		"fallback": "withicons:ice-cream-sketch",
	});
}

export default Component;
