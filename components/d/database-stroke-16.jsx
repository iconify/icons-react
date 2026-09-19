import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/yo49hdc3n.css';
import '../../css/u/u5_yrcoxv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><ellipse class="yo49hdc3n"/><path class="u5_yrcoxv"/></g>`,
		"fallback": "garden:database-stroke-16",
	});
}

export default Component;
