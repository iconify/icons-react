import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/esc3mdb0h.css';
import '../../css/y/yrrluib2v.css';
import '../../css/w/w74ze7n-k.css';
import '../../css/n/ndp1nlbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="esc3mdb0h"/><path class="yrrluib2v"/><path class="w74ze7n-k"/><path class="ndp1nlbbk"/></g>`,
		"fallback": "streamline-cyber-color:flashlight-2",
	});
}

export default Component;
