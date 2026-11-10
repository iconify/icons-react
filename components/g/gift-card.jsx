import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gu9thsrhq.css';
import '../../css/n/n6jaqi5-t.css';
import '../../css/k/k9dbl-bro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gu9thsrhq"/><path class="n6jaqi5-t"/><path class="k9dbl-bro"/></g>`,
		"fallback": "andrsrxn:gift-card",
	});
}

export default Component;
