import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y05o5vb9o.css';
import '../../css/q/qo3t9ndci.css';
import '../../css/h/hin_m4g8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y05o5vb9o"/><path class="qo3t9ndci"/><path clip-rule="evenodd" class="hin_m4g8s"/></g>`,
		"fallback": "reicon:cart5-duotone",
	});
}

export default Component;
