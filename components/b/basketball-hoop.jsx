import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r2ofn9zof.css';
import '../../css/t/t07u0zb9p.css';
import '../../css/z/z5spejdbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="r2ofn9zof"/><path class="t07u0zb9p"/><path class="z5spejdbt"/></g>`,
		"fallback": "hugeicons:basketball-hoop",
	});
}

export default Component;
