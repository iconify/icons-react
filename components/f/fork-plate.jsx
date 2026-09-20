import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hp5kg3bxz.css';
import '../../css/f/fappuev8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hp5kg3bxz"/><path class="fappuev8e"/></g>`,
		"fallback": "streamline-sharp:fork-plate",
	});
}

export default Component;
