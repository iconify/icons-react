import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/holxpac7n.css';
import '../../css/r/ru25vmbbg.css';
import '../../css/i/ipq0bdtft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="holxpac7n"/><path class="ru25vmbbg"/><path class="ipq0bdtft"/></g>`,
		"fallback": "solar:bookmark-opened-line-duotone",
	});
}

export default Component;
