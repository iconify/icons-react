import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qks_mnb9t.css';
import '../../css/i/iu45szbqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qks_mnb9t"/><path class="iu45szbqx"/></g>`,
		"fallback": "hugeicons:bookmark-block-01",
	});
}

export default Component;
