import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/osmjh3u8s.css';
import '../../css/b/b2it0vylx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="osmjh3u8s"/><path clip-rule="evenodd" class="b2it0vylx"/></g>`,
		"fallback": "healthicons:book2x-outline",
	});
}

export default Component;
