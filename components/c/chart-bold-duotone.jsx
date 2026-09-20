import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s2_dwgbfq.css';
import '../../css/z/zzbnajv4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s2_dwgbfq"/><path class="zzbnajv4o"/></g>`,
		"fallback": "solar:chart-bold-duotone",
	});
}

export default Component;
