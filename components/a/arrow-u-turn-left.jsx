import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v5va-787w.css';
import '../../css/e/euoysnvle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="v5va-787w"/><path class="euoysnvle"/></g>`,
		"fallback": "iconaut:arrow-u-turn-left",
	});
}

export default Component;
