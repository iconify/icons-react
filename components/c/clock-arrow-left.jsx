import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tc07prbkf.css';
import '../../css/e/ejnqsif1c.css';
import '../../css/y/ylnbz1h1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tc07prbkf"/><path class="ejnqsif1c"/><path class="ylnbz1h1b"/></g>`,
		"fallback": "lucide:clock-arrow-left",
	});
}

export default Component;
