import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dk3iqxb1k.css';
import '../../css/q/qbc8wsyir.css';
import '../../css/b/bqgqy_b5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dk3iqxb1k"/><path class="qbc8wsyir"/><path class="bqgqy_b5k"/></g>`,
		"fallback": "streamline-ultimate-color:credit-card-1",
	});
}

export default Component;
