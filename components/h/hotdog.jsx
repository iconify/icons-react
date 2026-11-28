import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xbl4n_bhz.css';
import '../../css/p/pnuw71ckt.css';
import '../../css/k/k47i19nce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xbl4n_bhz"/><path class="pnuw71ckt"/><path class="k47i19nce"/></g>`,
		"fallback": "iconaut:hotdog",
	});
}

export default Component;
