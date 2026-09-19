import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ema3-69dv.css';
import '../../css/q/qcb-z1bpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ema3-69dv"/><path class="qcb-z1bpl"/></g>`,
		"fallback": "iconoir:accessibility",
	});
}

export default Component;
