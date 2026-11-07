import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/q/qlhqa5a1y.css';
import '../../css/s/svu3l535p.css';
import '../../css/i/i4m8hib-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="qlhqa5a1y"/><path class="svu3l535p"/></g><path clip-rule="evenodd" class="i4m8hib-c"/>`,
		"fallback": "solar:case-bold-duotone",
	});
}

export default Component;
