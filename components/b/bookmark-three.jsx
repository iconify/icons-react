import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/k/kpsyoyb-z.css';
import '../../css/u/u3q5g5u0z.css';
import '../../css/d/d8x4eccuk.css';
import '../../css/r/rgdhiyb1m.css';
import '../../css/k/kkcbd7byr.css';
import '../../css/c/c4lz1s1hf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="kpsyoyb-z"/><path class="u3q5g5u0z"/><path class="d8x4eccuk"/><path class="rgdhiyb1m"/><path class="kkcbd7byr"/><path class="c4lz1s1hf"/></g>`,
		"fallback": "icon-park:bookmark-three",
	});
}

export default Component;
