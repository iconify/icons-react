import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bal25inyd.css';
import '../../css/g/g1jpv5ovk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bal25inyd"/><path class="g1jpv5ovk"/></g>`,
		"fallback": "streamline-sharp:gameboy",
	});
}

export default Component;
