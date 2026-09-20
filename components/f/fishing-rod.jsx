import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oblkbpbcc.css';
import '../../css/n/nmoouyb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oblkbpbcc"/><circle class="nmoouyb9r"/></g>`,
		"fallback": "lucide:fishing-rod",
	});
}

export default Component;
