import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jjq2qh_fp.css';
import '../../css/n/ncwgojbur.css';
import '../../css/r/rqdgvgazq.css';
import '../../css/k/k5wdjsmoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jjq2qh_fp"/><path class="ncwgojbur"/><path class="rqdgvgazq"/><path class="k5wdjsmoz"/></g>`,
		"fallback": "solar:document-text-bold-duotone",
	});
}

export default Component;
