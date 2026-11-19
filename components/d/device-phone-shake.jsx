import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fidqkuffv.css';
import '../../css/z/zahmt5b7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fidqkuffv"/><path class="zahmt5b7h"/></g>`,
		"fallback": "andrsrxn:device-phone-shake",
	});
}

export default Component;
