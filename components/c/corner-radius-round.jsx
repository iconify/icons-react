import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g8zlhtnbg.css';
import '../../css/n/nf26qb-8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="g8zlhtnbg"/><path class="nf26qb-8q"/></g>`,
		"fallback": "andrsrxn:corner-radius-round",
	});
}

export default Component;
