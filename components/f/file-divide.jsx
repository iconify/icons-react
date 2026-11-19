import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tjz-acciu.css';
import '../../css/c/c8nk4cbql.css';
import '../../css/r/rdvaelb7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tjz-acciu"/><path class="c8nk4cbql"/><path class="rdvaelb7k"/></g>`,
		"fallback": "andrsrxn:file-divide",
	});
}

export default Component;
