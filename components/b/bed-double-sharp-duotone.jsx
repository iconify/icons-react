import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o39p3yavl.css';
import '../../css/e/e4dn-ob3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o39p3yavl"/><path clip-rule="evenodd" class="e4dn-ob3i"/></g>`,
		"fallback": "keyline-icons:bed-double-sharp-duotone",
	});
}

export default Component;
