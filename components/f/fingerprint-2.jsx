import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezfumgw-x.css';
import '../../css/p/p-zwxcbbk.css';
import '../../css/t/t8vhikbgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ezfumgw-x"><path class="p-zwxcbbk"/><path class="t8vhikbgs"/></g>`,
		"fallback": "streamline-sharp-color:fingerprint-2",
	});
}

export default Component;
