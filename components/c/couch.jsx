import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mmj7lrbbf.css';
import '../../css/m/mq6zinb0v.css';
import '../../css/t/tru9dvbky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mmj7lrbbf"/><path class="mq6zinb0v"/><path class="tru9dvbky"/></g>`,
		"fallback": "andrsrxn:couch",
	});
}

export default Component;
