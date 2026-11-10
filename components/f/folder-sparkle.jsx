import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/imf6imktc.css';
import '../../css/y/ynqfxi_gi.css';
import '../../css/i/ibyb00b3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="imf6imktc"/><path class="ynqfxi_gi"/><path class="ibyb00b3c"/></g>`,
		"fallback": "andrsrxn:folder-sparkle",
	});
}

export default Component;
