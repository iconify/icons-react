import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/h/hyqbivb0g.css';
import '../../css/e/eo4kxo38n.css';
import '../../css/j/j76rm9bbl.css';
import '../../css/i/i8zu89bux.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="hyqbivb0g"/><path class="eo4kxo38n"/><path class="j76rm9bbl"/><path class="i8zu89bux"/></g>`,
		"fallback": "skill-icons:gtk-dark",
	});
}

export default Component;
