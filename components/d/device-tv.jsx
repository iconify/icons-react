import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pi2k9ghdh.css';
import '../../css/t/txi9e4f1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pi2k9ghdh"/><path class="txi9e4f1p"/></g>`,
		"fallback": "andrsrxn:device-tv",
	});
}

export default Component;
