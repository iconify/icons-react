import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wtmbckbou.css';
import '../../css/d/dyjew1g5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wtmbckbou"/><path class="dyjew1g5f"/></g>`,
		"fallback": "coolicons:id-card-duotone-round",
	});
}

export default Component;
