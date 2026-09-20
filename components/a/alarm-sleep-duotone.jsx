import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rz20bbcsb.css';
import '../../css/i/il66c94sx.css';
import '../../css/g/g6-ji5mbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rz20bbcsb"/><path class="il66c94sx"/><path clip-rule="evenodd" class="g6-ji5mbd"/></g>`,
		"fallback": "reicon:alarm-sleep-duotone",
	});
}

export default Component;
