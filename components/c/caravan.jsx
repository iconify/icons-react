import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/utlx19kee.css';
import '../../css/u/uoskrsb_t.css';
import '../../css/j/j3me78b4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="utlx19kee"/><path class="uoskrsb_t"/><circle class="j3me78b4l"/></g>`,
		"fallback": "lucide:caravan",
	});
}

export default Component;
