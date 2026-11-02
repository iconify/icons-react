import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/ntmzopbav.css';
import '../../css/m/mrbs-czzf.css';
import '../../css/e/eee98mk-t.css';
import '../../css/n/nryqp7bir.css';
import '../../css/u/uoe2zhb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ntmzopbav"/><path class="mrbs-czzf"/><path class="eee98mk-t"/><path class="nryqp7bir"/><path class="uoe2zhb4w"/></g>`,
		"fallback": "matita:id-card",
	});
}

export default Component;
