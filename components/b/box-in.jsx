import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sst9zrbsd.css';
import '../../css/b/bt72_aczh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sst9zrbsd"/><path class="bt72_aczh"/></g>`,
		"fallback": "andrsrxn:box-in",
	});
}

export default Component;
