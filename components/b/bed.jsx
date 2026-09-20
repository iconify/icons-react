import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vo9p50b3n.css';
import '../../css/t/tcdsvjctu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vo9p50b3n"/><path class="tcdsvjctu"/></g>`,
		"fallback": "lets-icons:bed",
	});
}

export default Component;
