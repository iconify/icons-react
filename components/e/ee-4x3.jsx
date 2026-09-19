import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv-nxjz8c.css';
import '../../css/j/j-gf9ybzc.css';
import '../../css/d/d20s0p7uf.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv-nxjz8c"/><path class="j-gf9ybzc"/><path class="d20s0p7uf"/>`,
		"fallback": "flag:ee-4x3",
	});
}

export default Component;
