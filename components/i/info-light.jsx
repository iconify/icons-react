import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/i936e-doz.css';
import '../../css/h/h7ggax-wi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="i936e-doz"/><path class="h7ggax-wi"/></g>`,
		"fallback": "lets-icons:info-light",
	});
}

export default Component;
