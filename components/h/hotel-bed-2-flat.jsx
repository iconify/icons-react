import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p2xmg94pm.css';
import '../../css/x/xib3tn_6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p2xmg94pm"/><path clip-rule="evenodd" class="xib3tn_6k"/></g>`,
		"fallback": "streamline-sharp-color:hotel-bed-2-flat",
	});
}

export default Component;
