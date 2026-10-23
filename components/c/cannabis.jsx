import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gr9pisv-m.css';
import '../../css/x/x4-au3xci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gr9pisv-m"/><path class="x4-au3xci"/></g>`,
		"fallback": "andrsrxn:cannabis",
	});
}

export default Component;
