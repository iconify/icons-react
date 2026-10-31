import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tvg65tvki.css';
import '../../css/i/iagdctb2d.css';
import '../../css/e/eiys41bih.css';
import '../../css/p/pi6-q1i4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="tvg65tvki wm-shadow"/><path class="iagdctb2d wm-shadow"/><path class="eiys41bih"/><path class="pi6-q1i4h"/></g>`,
		"fallback": "withicons-brutal:cat",
	});
}

export default Component;
