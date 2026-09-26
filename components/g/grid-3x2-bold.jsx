import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jyztlerrd.css';
import '../../css/g/gzh3yfbqz.css';
import '../../css/y/yn6-hjbbz.css';
import '../../css/n/ny59yrbpk.css';
import '../../css/n/nqyvhgw5r.css';
import '../../css/d/dh03szb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jyztlerrd"/><path class="gzh3yfbqz"/><path class="yn6-hjbbz"/><path class="ny59yrbpk"/><path class="nqyvhgw5r"/><path class="dh03szb4d"/></g>`,
		"fallback": "solar:grid-3x2-bold",
	});
}

export default Component;
