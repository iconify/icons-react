import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vq2m395fl.css';
import '../../css/q/qdciwdadn.css';
import '../../css/q/qd1u16mtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vq2m395fl"/><path class="qdciwdadn"/><path class="qd1u16mtd"/></g>`,
		"fallback": "tabler:database-filled",
	});
}

export default Component;
