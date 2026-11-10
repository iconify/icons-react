import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wwmy3oszf.css';
import '../../css/l/lla5z-3iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wwmy3oszf"/><path class="lla5z-3iz"/></g>`,
		"fallback": "andrsrxn:align-box-right-bottom",
	});
}

export default Component;
