import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/ox7az0b5n.css';
import '../../css/c/cbw2w-bvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ox7az0b5n"/><path class="cbw2w-bvq"/></g>`,
		"fallback": "streamline-sharp:credit-card-2",
	});
}

export default Component;
