import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgd16pbvb.css';
import '../../css/d/djbc0dqwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pgd16pbvb"/><path class="djbc0dqwp"/></g>`,
		"fallback": "si:dashboard-customize-duotone",
	});
}

export default Component;
