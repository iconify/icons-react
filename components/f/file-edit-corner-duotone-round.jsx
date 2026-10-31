import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wq4xnu3gv.css';
import '../../css/h/humd6bbgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wq4xnu3gv"/><path class="humd6bbgu"/></g>`,
		"fallback": "coolicons:file-edit-corner-duotone-round",
	});
}

export default Component;
