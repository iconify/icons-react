import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4mac9bsu.css';
import '../../css/n/n1wuunt1w.css';
import '../../css/y/yezgepoza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(135 12.06 8.92)" class="n4mac9bsu"/><circle transform="rotate(135 12.06 8.92)" class="n1wuunt1w"/><path class="yezgepoza"/></g>`,
		"fallback": "andrsrxn:female",
	});
}

export default Component;
