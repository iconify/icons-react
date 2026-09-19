import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhb8c01ug.css';
import '../../css/j/j8wdgmbqs.css';
import '../../css/n/np3_17o5d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hhb8c01ug"><path class="j8wdgmbqs"/><path class="np3_17o5d"/></g>`,
		"fallback": "catppuccin:adobe-id",
	});
}

export default Component;
