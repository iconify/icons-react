import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jpk7rbbjw.css';
import '../../css/e/efdwq-jsz.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jpk7rbbjw"/><path class="efdwq-jsz"/></g>`,
		"fallback": "thesvg-color:gram",
	});
}

export default Component;
