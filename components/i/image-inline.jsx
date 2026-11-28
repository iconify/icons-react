import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jlhiobc1i.css';
import '../../css/r/r9z3sqvnx.css';
import '../../css/y/yi-g0cbfw.css';
import '../../css/e/ehzilibzq.css';
import '../../css/q/qudhafvrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jlhiobc1i"/><path class="r9z3sqvnx"/><path class="yi-g0cbfw"/><path class="ehzilibzq"/><path class="qudhafvrj"/></g>`,
		"fallback": "iconaut:image-inline",
	});
}

export default Component;
