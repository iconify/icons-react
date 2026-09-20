import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nc4rl_brn.css';
import '../../css/a/ayaqdo9ve.css';
import '../../css/z/za5ig0byw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nc4rl_brn"/><path class="ayaqdo9ve"/><path class="za5ig0byw"/></g>`,
		"fallback": "pepicons-print:headphone",
	});
}

export default Component;
