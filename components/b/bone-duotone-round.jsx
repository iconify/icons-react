import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e118m9bhl.css';
import '../../css/w/wyaixbcry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e118m9bhl"/><path class="wyaixbcry"/></g>`,
		"fallback": "coolicons:bone-duotone-round",
	});
}

export default Component;
