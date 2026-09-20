import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wdq8tft1o.css';
import '../../css/y/yo62u5njc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wdq8tft1o"/><path class="yo62u5njc"/></g>`,
		"fallback": "tabler:glass-cocktail",
	});
}

export default Component;
