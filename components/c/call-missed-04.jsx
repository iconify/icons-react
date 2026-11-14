import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bb1s76b8w.css';
import '../../css/a/arlyxjb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bb1s76b8w"/><path class="arlyxjb3h"/></g>`,
		"fallback": "hugeicons:call-missed-04",
	});
}

export default Component;
