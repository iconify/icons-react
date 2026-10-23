import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8nxiccfx.css';
import '../../css/a/a_fok6klj.css';
import '../../css/p/pgliny47l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="q8nxiccfx"/><path class="a_fok6klj"/><path class="pgliny47l"/></g>`,
		"fallback": "andrsrxn:fish-symbol",
	});
}

export default Component;
