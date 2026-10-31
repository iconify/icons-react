import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/p7-ogkgpo.css';
import '../../css/h/hb6jkcb9k.css';
import '../../css/p/p86qfqb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="p7-ogkgpo wm-shadow"/><path class="hb6jkcb9k wm-shadow"/><path class="p86qfqb7x"/></g>`,
		"fallback": "withicons-brutal:arrow-down-to-line",
	});
}

export default Component;
