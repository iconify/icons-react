import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z238-0b7y.css';
import '../../css/g/gbg9gybtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z238-0b7y"/><path class="gbg9gybtq"/></g>`,
		"fallback": "solar:bag-3-bold-duotone",
	});
}

export default Component;
