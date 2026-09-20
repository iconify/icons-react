import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pu3j9c4yd.css';
import '../../css/k/ktgnb8b9j.css';
import '../../css/x/x736_-_mc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pu3j9c4yd"/><path clip-rule="evenodd" class="ktgnb8b9j"/><path clip-rule="evenodd" class="x736_-_mc"/></g>`,
		"fallback": "streamline-plump-color:ice-cream-2-flat",
	});
}

export default Component;
