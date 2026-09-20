import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p0-ym0vcj.css';
import '../../css/i/inrgkpb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p0-ym0vcj"/><path class="inrgkpb4h"/></g>`,
		"fallback": "nrk:go-forward-5-expressive",
	});
}

export default Component;
