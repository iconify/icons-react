import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w9j05kbxw.css';
import '../../css/r/rr43ghbwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w9j05kbxw"/><path class="rr43ghbwd"/></g>`,
		"fallback": "coolicons:desktop-tower-duocolor-round",
	});
}

export default Component;
