import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/neo42abhx.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/d/dc7hcta0y.css';
import '../../css/a/axzdh2blw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="neo42abhx"/><g class="mc2zb0bvp"><path class="dc7hcta0y"/><path class="axzdh2blw"/></g></g>`,
		"fallback": "solar:closet-bold-duotone",
	});
}

export default Component;
