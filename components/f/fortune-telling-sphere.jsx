import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rctplz-1d.css';
import '../../css/h/hajx-1bjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rctplz-1d"/><path class="hajx-1bjk"/></g>`,
		"fallback": "streamline-sharp:fortune-telling-sphere",
	});
}

export default Component;
