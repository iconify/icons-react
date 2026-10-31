import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wyvplj7xq.css';
import '../../css/c/c3tualr0p.css';
import '../../css/i/i_ea3q1-f.css';
import '../../css/n/n7g0rrbju.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wyvplj7xq"/><path class="c3tualr0p"/><path class="i_ea3q1-f"/><path class="n7g0rrbju"/></g>`,
		"fallback": "cif:gb",
	});
}

export default Component;
