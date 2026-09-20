import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/o/o67v62d_y.css';
import '../../css/z/ztce-3tgz.css';
import '../../css/v/vnmoa8brt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="o67v62d_y"/><path class="ztce-3tgz"/><path class="vnmoa8brt"/></g>`,
		"fallback": "streamline-sharp-color:chat-bubble-crack-square",
	});
}

export default Component;
