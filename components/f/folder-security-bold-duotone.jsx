import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c6igmg8ve.css';
import '../../css/b/bwr1-cbxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c6igmg8ve"/><path clip-rule="evenodd" class="bwr1-cbxp"/></g>`,
		"fallback": "solar:folder-security-bold-duotone",
	});
}

export default Component;
