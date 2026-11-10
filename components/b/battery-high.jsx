import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nhhtiybqt.css';
import '../../css/l/l7y9fdbdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nhhtiybqt"/><path class="l7y9fdbdu"/></g>`,
		"fallback": "andrsrxn:battery-high",
	});
}

export default Component;
