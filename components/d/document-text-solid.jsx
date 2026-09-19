import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lkv3qud6f.css';
import '../../css/h/hkaetzb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lkv3qud6f"/><path class="hkaetzb4n"/></g>`,
		"fallback": "heroicons:document-text-solid",
	});
}

export default Component;
