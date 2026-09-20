import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iqo4bgbyj.css';
import '../../css/k/kepb6lgyh.css';
import '../../css/d/d20-59bvj.css';
import '../../css/h/h2-cj859b.css';
import '../../css/r/rpt0k3wsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iqo4bgbyj"/><path class="kepb6lgyh"/><path clip-rule="evenodd" class="d20-59bvj"/><path class="h2-cj859b"/><path clip-rule="evenodd" class="rpt0k3wsz"/></g>`,
		"fallback": "reicon:balls-duotone",
	});
}

export default Component;
