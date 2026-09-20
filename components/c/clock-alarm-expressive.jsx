import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n6acdccgq.css';
import '../../css/h/h1utcdbud.css';
import '../../css/g/gq2tbfb-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n6acdccgq"/><path clip-rule="evenodd" class="h1utcdbud"/><path class="gq2tbfb-m"/></g>`,
		"fallback": "nrk:clock-alarm-expressive",
	});
}

export default Component;
