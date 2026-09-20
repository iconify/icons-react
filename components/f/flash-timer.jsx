import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sn8rrcblb.css';
import '../../css/f/fztijqbvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="sn8rrcblb"/><path class="fztijqbvq"/></g>`,
		"fallback": "streamline-sharp:flash-timer",
	});
}

export default Component;
