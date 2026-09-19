import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o799rcisc.css';
import '../../css/d/dufseh5oc.css';

const viewBox = {"width":35,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o799rcisc"/><path class="dufseh5oc"/></g>`,
		"fallback": "et:caution",
	});
}

export default Component;
