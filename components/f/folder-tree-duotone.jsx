import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/emwx-3k0l.css';
import '../../css/w/wqx342l3h.css';
import '../../css/j/j1pmrcoqo.css';
import '../../css/r/r1x6x451g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="emwx-3k0l"/><path class="wqx342l3h"/><path class="j1pmrcoqo"/><path class="r1x6x451g"/></g>`,
		"fallback": "lucide-extended:folder-tree-duotone",
	});
}

export default Component;
