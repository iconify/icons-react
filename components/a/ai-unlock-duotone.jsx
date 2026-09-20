import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nrtkqwbrh.css';
import '../../css/y/y6umuacnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nrtkqwbrh"/><path class="y6umuacnl"/></g>`,
		"fallback": "si:ai-unlock-duotone",
	});
}

export default Component;
