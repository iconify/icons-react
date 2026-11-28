import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w8trh7b2k.css';
import '../../css/e/euoysnvle.css';
import '../../css/o/orlvbjr0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="w8trh7b2k"/><path class="euoysnvle"/><path class="orlvbjr0y"/></g>`,
		"fallback": "iconaut:arrow-u-turn-left-line-duo",
	});
}

export default Component;
