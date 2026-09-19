import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqbkv8u2i.css';
import '../../css/a/an0_1xo_x.css';
import '../../css/o/o1d5h2b_p.css';
import '../../css/d/d10519b8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqbkv8u2i"/><circle class="an0_1xo_x"/><circle class="o1d5h2b_p"/><path class="d10519b8z"/>`,
		"fallback": "bx:happy-alt",
	});
}

export default Component;
