import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v_78o9bzj.css';
import '../../css/z/zep2x2try.css';
import '../../css/u/u41b4k0dr.css';
import '../../css/r/rym5w_4rk.css';
import '../../css/c/c3-zm6bwt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v_78o9bzj"/><path clip-rule="evenodd" class="zep2x2try"/><path class="u41b4k0dr"/><path clip-rule="evenodd" class="rym5w_4rk"/><path class="c3-zm6bwt"/></g>`,
		"fallback": "healthicons:gynecology-outline",
	});
}

export default Component;
