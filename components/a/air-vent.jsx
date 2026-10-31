import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a85tzjcpz.css';
import '../../css/b/b319z3bxe.css';
import '../../css/q/q1l6tebrz.css';
import '../../css/x/xp-ry7bst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="a85tzjcpz wm-shadow"/><path class="b319z3bxe wm-shadow"/><path class="q1l6tebrz"/><path class="xp-ry7bst"/></g>`,
		"fallback": "withicons-brutal:air-vent",
	});
}

export default Component;
