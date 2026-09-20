import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xnpuym6an.css';
import '../../css/c/c4lpx2e8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xnpuym6an"/><path clip-rule="evenodd" class="c4lpx2e8s"/></g>`,
		"fallback": "keyline-icons:database-duotone",
	});
}

export default Component;
