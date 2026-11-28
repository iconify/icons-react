import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2af5cbuv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gw_btbw0f.css';
import '../../css/e/ec8kokbmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary x2af5cbuv"/><g class="dt0cm9dhy primary"><path class="gw_btbw0f"/><path class="ec8kokbmw"/></g>`,
		"fallback": "iconaut:comma-duo",
	});
}

export default Component;
