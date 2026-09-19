import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qsij3zb9w.css';
import '../../css/q/qyze_cc1g.css';
import '../../css/q/qs5g--bge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qsij3zb9w"/><path class="qyze_cc1g"/><path class="qs5g--bge"/></g>`,
		"fallback": "iconoir:healthcare",
	});
}

export default Component;
