import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nmo593b_l.css';
import '../../css/m/m58pdegcz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nmo593b_l"/><path clip-rule="evenodd" class="m58pdegcz"/></g>`,
		"fallback": "heroicons-solid:currency-dollar",
	});
}

export default Component;
