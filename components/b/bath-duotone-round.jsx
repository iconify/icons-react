import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gqrhoby2h.css';
import '../../css/z/zweypmtyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gqrhoby2h"/><path class="zweypmtyq"/></g>`,
		"fallback": "coolicons:bath-duotone-round",
	});
}

export default Component;
