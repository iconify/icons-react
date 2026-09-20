import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bitvpzbrx.css';
import '../../css/m/mkzbs1ujy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bitvpzbrx"/><path class="mkzbs1ujy"/></g>`,
		"fallback": "majesticons:cup",
	});
}

export default Component;
