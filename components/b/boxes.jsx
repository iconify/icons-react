import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/faeb4ph9u.css';
import '../../css/q/qggg1kbck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="faeb4ph9u"/><path class="qggg1kbck"/></g>`,
		"fallback": "lucide:boxes",
	});
}

export default Component;
