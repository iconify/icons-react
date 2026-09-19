import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k6sjk11mv.css';
import '../../css/i/izoaf82rk.css';
import '../../css/h/h8jrr3beq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k6sjk11mv"/><path class="izoaf82rk"/><path class="h8jrr3beq"/></g>`,
		"fallback": "icon-park-outline:injection",
	});
}

export default Component;
