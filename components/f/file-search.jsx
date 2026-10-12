import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kmcxk3v0s.css';
import '../../css/d/duthjibni.css';
import '../../css/l/l6lpb5bpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kmcxk3v0s"/><path class="duthjibni"/><path class="l6lpb5bpd"/></g>`,
		"fallback": "andrsrxn:file-search",
	});
}

export default Component;
