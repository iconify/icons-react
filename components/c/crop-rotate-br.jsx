import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j14jz-k9s.css';
import '../../css/z/z2mjhdhbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j14jz-k9s"/><path class="z2mjhdhbk"/></g>`,
		"fallback": "iconoir:crop-rotate-br",
	});
}

export default Component;
