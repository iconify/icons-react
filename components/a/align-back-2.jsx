import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/d/duo2tzbwe.css';
import '../../css/f/f2x1xkbtq.css';
import '../../css/h/hp9sw6onm.css';
import '../../css/w/w3wj5iy0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="duo2tzbwe"/><path class="f2x1xkbtq"/><path class="hp9sw6onm"/><path class="w3wj5iy0u"/></g>`,
		"fallback": "streamline-sharp-color:align-back-2",
	});
}

export default Component;
