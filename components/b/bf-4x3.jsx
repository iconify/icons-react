import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/htpjnobzt.css';
import '../../css/h/h77z6nbit.css';
import '../../css/g/gqbq4hb5z.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="htpjnobzt"/><path class="h77z6nbit"/><path class="gqbq4hb5z"/></g>`,
		"fallback": "flag:bf-4x3",
	});
}

export default Component;
