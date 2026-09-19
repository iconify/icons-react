import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q_hr1s_on.css';
import '../../css/w/w_e3nlbsq.css';
import '../../css/l/lhaxnqbla.css';
import '../../css/k/kbpjvngat.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="q_hr1s_on"/><path class="w_e3nlbsq"/><path class="lhaxnqbla"/><path class="kbpjvngat"/></g>`,
		"fallback": "catppuccin:cargo-lock",
	});
}

export default Component;
