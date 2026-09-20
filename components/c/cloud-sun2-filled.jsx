import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gkyfinbbw.css';
import '../../css/b/b29gsyi_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gkyfinbbw"/><path class="b29gsyi_z"/></g>`,
		"fallback": "reicon:cloud-sun2-filled",
	});
}

export default Component;
