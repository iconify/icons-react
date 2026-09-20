import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/k/k08p-763l.css';
import '../../css/k/k5jwxu0qb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="k08p-763l"/><path class="k5jwxu0qb"/></g>`,
		"fallback": "streamline-cyber:cash-hand-4",
	});
}

export default Component;
