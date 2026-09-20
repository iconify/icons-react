import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uiwtf-lyp.css';
import '../../css/p/pyus203bj.css';
import '../../css/l/liq0-ubhp.css';
import '../../css/k/k30kpljgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uiwtf-lyp"/><path class="pyus203bj"/><path class="liq0-ubhp"/><path class="k30kpljgi"/></g>`,
		"fallback": "tdesign:double-storey",
	});
}

export default Component;
