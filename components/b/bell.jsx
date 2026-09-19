import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcf0a2x-v.css';
import '../../css/y/yr6qxeb0g.css';
import '../../css/l/lrjsqqbbm.css';
import '../../css/c/cd3dpacbb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcf0a2x-v"/><path class="yr6qxeb0g"/><path class="lrjsqqbbm"/><path class="cd3dpacbb"/>`,
		"fallback": "fxemoji:bell",
	});
}

export default Component;
