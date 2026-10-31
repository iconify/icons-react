import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/th3if11oc.css';
import '../../css/o/o-n-fog1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="th3if11oc wm-k"/><path class="o-n-fog1d wm-a"/></g>`,
		"fallback": "withicons:dhak-gloss",
	});
}

export default Component;
