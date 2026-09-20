import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/m/mfbnmqh5k.css';
import '../../css/j/j-bt0mbso.css';
import '../../css/j/jsk74rbvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="mfbnmqh5k"/><path class="j-bt0mbso"/><path class="jsk74rbvg"/></g>`,
		"fallback": "streamline-cyber:account-hexagon",
	});
}

export default Component;
