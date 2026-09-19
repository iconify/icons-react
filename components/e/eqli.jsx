import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nctpa3-er.css';
import '../../css/x/x2dao43ij.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="nctpa3-er"/><path class="x2dao43ij"/></g>`,
		"fallback": "cryptocurrency-color:eqli",
	});
}

export default Component;
