import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s_670eoes.css';
import '../../css/u/u_pc86o9w.css';
import '../../css/v/v0fdm9b6a.css';
import '../../css/b/be2ld5bgr.css';
import '../../css/w/wxh21vxbb.css';
import '../../css/j/jv4_fxbhf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s_670eoes"/><path class="u_pc86o9w"/><path class="v0fdm9b6a"/><path class="be2ld5bgr"/><path class="wxh21vxbb"/><path class="jv4_fxbhf"/></g>`,
		"fallback": "streamline-color:industry-innovation-and-infrastructure-flat",
	});
}

export default Component;
