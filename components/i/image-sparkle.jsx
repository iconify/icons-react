import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uxpupukxi.css';
import '../../css/y/y3vpglndy.css';
import '../../css/k/k1488cb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uxpupukxi"/><path class="y3vpglndy"/><path class="k1488cb1l"/></g>`,
		"fallback": "andrsrxn:image-sparkle",
	});
}

export default Component;
