import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qkenlfbmv.css';
import '../../css/x/x877zbxcf.css';
import '../../css/u/uj-b80bxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qkenlfbmv"/><path class="x877zbxcf"/><path class="uj-b80bxk"/></g>`,
		"fallback": "andrsrxn:folder-sparkle",
	});
}

export default Component;
