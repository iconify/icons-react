import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/g/gd8dsqbqp.css';
import '../../css/c/craj1zw4d.css';
import '../../css/g/gqixgnb9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="gd8dsqbqp"/><path class="craj1zw4d"/><path class="gqixgnb9o"/></g>`,
		"fallback": "iconamoon:calculator-thin",
	});
}

export default Component;
