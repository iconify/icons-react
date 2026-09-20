import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p3qj0fbhu.css';
import '../../css/z/z_j3g4bhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="p3qj0fbhu"/><path class="z_j3g4bhq"/></g>`,
		"fallback": "streamline-sharp:allergens-fish",
	});
}

export default Component;
