import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/klrv-db_n.css';
import '../../css/e/e0nskpb9u.css';
import '../../css/k/kcj5x25te.css';
import '../../css/q/q2hd1tb1p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="klrv-db_n"/><path class="e0nskpb9u"/><path class="kcj5x25te"/><path class="q2hd1tb1p"/></g>`,
		"fallback": "streamline-color:gameboy",
	});
}

export default Component;
