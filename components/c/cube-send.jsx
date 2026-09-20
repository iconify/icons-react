import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bbktfca2l.css';
import '../../css/t/tkx80kbee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bbktfca2l"/><path class="tkx80kbee"/></g>`,
		"fallback": "tabler:cube-send",
	});
}

export default Component;
