import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hjibaxbyv.css';
import '../../css/k/k4u0ym-gw.css';
import '../../css/h/heuu9f7yh.css';
import '../../css/r/r15kgybdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hjibaxbyv"/><path class="k4u0ym-gw"/><path class="heuu9f7yh"/><path class="r15kgybdj"/></g>`,
		"fallback": "streamline-sharp:chicken-grilled-stream",
	});
}

export default Component;
