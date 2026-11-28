import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p8zgc5_5l.css';
import '../../css/v/vc3zpsb3l.css';
import '../../css/w/wwbzjkk7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="p8zgc5_5l"/><path class="vc3zpsb3l"/><path class="wwbzjkk7o"/></g>`,
		"fallback": "iconaut:gallery-vertical",
	});
}

export default Component;
