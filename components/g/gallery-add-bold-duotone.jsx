import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uyarvbbox.css';
import '../../css/o/of78i7b3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uyarvbbox"/><path class="of78i7b3p"/></g>`,
		"fallback": "solar:gallery-add-bold-duotone",
	});
}

export default Component;
