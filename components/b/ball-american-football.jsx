import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mhyagsv6a.css';
import '../../css/w/w16gc8b9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mhyagsv6a"/><path class="w16gc8b9m"/></g>`,
		"fallback": "andrsrxn:ball-american-football",
	});
}

export default Component;
