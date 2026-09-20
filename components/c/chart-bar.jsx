import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jysr05b2v.css';
import '../../css/c/cdzz8ubue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jysr05b2v"/><path class="cdzz8ubue"/></g>`,
		"fallback": "reicon:chart-bar",
	});
}

export default Component;
