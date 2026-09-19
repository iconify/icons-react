import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nvx55zk_o.css';
import '../../css/b/by10jt0fw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nvx55zk_o"/><path class="by10jt0fw"/></g>`,
		"fallback": "bi:file-earmark-image",
	});
}

export default Component;
