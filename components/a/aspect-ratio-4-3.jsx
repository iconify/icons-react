import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mnoa3befr.css';
import '../../css/i/i8zvvu--u.css';
import '../../css/r/r-naus49m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mnoa3befr"/><path class="i8zvvu--u"/><path class="r-naus49m"/></g>`,
		"fallback": "andrsrxn:aspect-ratio-4-3",
	});
}

export default Component;
