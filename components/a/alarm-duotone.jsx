import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iuub-958g.css';
import '../../css/f/frb_zpbsh.css';
import '../../css/g/g6-ji5mbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iuub-958g"/><path class="frb_zpbsh"/><path clip-rule="evenodd" class="g6-ji5mbd"/></g>`,
		"fallback": "reicon:alarm-duotone",
	});
}

export default Component;
