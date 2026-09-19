import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ajlqwx7cf.css';
import '../../css/m/m2uky8mso.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ajlqwx7cf"/><path class="m2uky8mso"/></g>`,
		"fallback": "bi:car-front",
	});
}

export default Component;
