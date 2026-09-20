import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l4l1k5fea.css';
import '../../css/o/obrnuqf0o.css';
import '../../css/f/fwllynbdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l4l1k5fea"/><path class="obrnuqf0o"/><path class="fwllynbdu"/></g>`,
		"fallback": "mage:calendar-question-mark",
	});
}

export default Component;
