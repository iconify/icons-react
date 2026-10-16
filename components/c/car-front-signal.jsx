import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v8cy0tbyu.css';
import '../../css/c/c6e4jxb6m.css';
import '../../css/c/ceybkyb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v8cy0tbyu"/><path class="c6e4jxb6m"/><path class="ceybkyb8a"/></g>`,
		"fallback": "andrsrxn:car-front-signal",
	});
}

export default Component;
