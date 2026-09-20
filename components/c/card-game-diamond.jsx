import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bal25inyd.css';
import '../../css/m/mpn62ab2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bal25inyd"/><path class="mpn62ab2d"/></g>`,
		"fallback": "streamline-sharp:card-game-diamond",
	});
}

export default Component;
