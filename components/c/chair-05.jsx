import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k-x22tlcb.css';
import '../../css/c/cgg-zqb4i.css';
import '../../css/f/ffgm8df8b.css';
import '../../css/t/t41qtibro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="k-x22tlcb"/><path class="cgg-zqb4i"/><path class="ffgm8df8b"/><path class="t41qtibro"/></g>`,
		"fallback": "hugeicons:chair-05",
	});
}

export default Component;
