import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ubqikrxvg.css';
import '../../css/s/s0jy9kb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ubqikrxvg"/><path class="s0jy9kb2o"/></g>`,
		"fallback": "coolicons:gitlab-duotone-round",
	});
}

export default Component;
