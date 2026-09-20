import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h4_l0fbjg.css';
import '../../css/i/i-q3lac-j.css';
import '../../css/c/c1mbisbfh.css';
import '../../css/j/jj0-gjlor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h4_l0fbjg"/><path class="i-q3lac-j"/><path class="c1mbisbfh"/><path class="jj0-gjlor"/></g>`,
		"fallback": "streamline-sharp:graduation-cap",
	});
}

export default Component;
