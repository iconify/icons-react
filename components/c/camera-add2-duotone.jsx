import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lf8itkqqh.css';
import '../../css/l/l8uwo7b3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lf8itkqqh"/><path class="l8uwo7b3x"/></g>`,
		"fallback": "reicon:camera-add2-duotone",
	});
}

export default Component;
