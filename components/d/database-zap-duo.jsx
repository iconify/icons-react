import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pm9m58bqs.css';
import '../../css/l/lwyoupl0p.css';
import '../../css/j/jljbt0bgl.css';
import '../../css/y/y95393_dl.css';
import '../../css/i/i83y3y1nc.css';
import '../../css/x/xfthtjbma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pm9m58bqs"/><path class="lwyoupl0p wm-s"/><path class="jljbt0bgl wm-s"/><path class="y95393_dl"/><path class="i83y3y1nc"/><path class="wm-a xfthtjbma"/></g>`,
		"fallback": "withicons:database-zap-duo",
	});
}

export default Component;
