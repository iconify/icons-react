import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lnnhast9d.css';
import '../../css/g/gamqvlbit.css';
import '../../css/t/t1hqvdscu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lnnhast9d"/><path class="gamqvlbit"/><path clip-rule="evenodd" class="t1hqvdscu"/></g>`,
		"fallback": "solar:face-scan-circle-outline",
	});
}

export default Component;
