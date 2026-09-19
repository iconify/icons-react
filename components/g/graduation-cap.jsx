import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iqyk-ibir.css';
import '../../css/e/e41bt1g7m.css';
import '../../css/o/ox77wxbsm.css';
import '../../css/q/qx1mr74bj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="iqyk-ibir"/><path class="e41bt1g7m"/><path class="ox77wxbsm"/><path class="qx1mr74bj"/></g>`,
		"fallback": "glyphs-poly:graduation-cap",
	});
}

export default Component;
