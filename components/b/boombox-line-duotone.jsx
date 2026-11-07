import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b7i2c-b3z.css';
import '../../css/k/k66tt2kvs.css';
import '../../css/h/hq-5njbjh.css';
import '../../css/g/ga-ta5brg.css';
import '../../css/i/i8x7tm9zu.css';
import '../../css/r/rnv8iibym.css';
import '../../css/j/jyyytfbkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b7i2c-b3z"/><path class="k66tt2kvs"/><path class="hq-5njbjh"/><path class="ga-ta5brg"/><path class="i8x7tm9zu"/><path class="rnv8iibym"/><path class="jyyytfbkh"/></g>`,
		"fallback": "solar:boombox-line-duotone",
	});
}

export default Component;
