import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hx783jr7y.css';
import '../../css/c/cq7w1r5-n.css';
import '../../css/f/f3kvwabys.css';
import '../../css/c/cabg2xbqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hx783jr7y wm-a"/><path class="cq7w1r5-n"/><path class="f3kvwabys"/><path class="cabg2xbqn wm-s"/></g>`,
		"fallback": "withicons:cauldron",
	});
}

export default Component;
