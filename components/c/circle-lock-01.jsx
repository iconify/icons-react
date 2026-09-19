import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r9ixvp21u.css';
import '../../css/p/po3o6yboy.css';
import '../../css/a/an13f2b6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="r9ixvp21u"/><path class="po3o6yboy"/><path class="an13f2b6h"/></g>`,
		"fallback": "hugeicons:circle-lock-01",
	});
}

export default Component;
