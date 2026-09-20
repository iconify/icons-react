import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
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
		"content": `<g class="flen3tbdj"><path class="i936e-doz"/><path class="h7ggax-wi"/></g>`,
		"fallback": "lets-icons:info",
	});
}

export default Component;
