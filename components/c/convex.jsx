import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uu4-dmbyx.css';
import '../../css/m/m18hjpwjd.css';
import '../../css/k/kuhhwii4x.css';

const viewBox = {"width":128,"height":132,"left":28,"top":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uu4-dmbyx"/><path class="m18hjpwjd"/><path class="kuhhwii4x"/></g>`,
		"fallback": "thesvg-color:convex",
	});
}

export default Component;
