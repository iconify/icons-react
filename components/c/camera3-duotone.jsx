import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lf8itkqqh.css';
import '../../css/j/jg-zjmaar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lf8itkqqh"/><path class="jg-zjmaar"/></g>`,
		"fallback": "reicon:camera3-duotone",
	});
}

export default Component;
