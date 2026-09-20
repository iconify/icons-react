import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ygnoyjg8p.css';
import '../../css/u/uc33igb-n.css';
import '../../css/y/ywzw80bph.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ygnoyjg8p"/><path class="uc33igb-n"/><path class="ywzw80bph"/></g>`,
		"fallback": "streamline-flex-color:car-taxi-1-flat",
	});
}

export default Component;
