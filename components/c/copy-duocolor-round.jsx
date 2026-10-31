import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s1fc08b0i.css';
import '../../css/s/szjxg1zjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s1fc08b0i"/><path class="szjxg1zjg"/></g>`,
		"fallback": "coolicons:copy-duocolor-round",
	});
}

export default Component;
