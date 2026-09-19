import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/za3tj5b4x.css';
import '../../css/k/kfmx8mkie.css';
import '../../css/p/p0ok30agg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="za3tj5b4x"/><path class="kfmx8mkie"/><path class="p0ok30agg"/></g>`,
		"fallback": "pepicons:eye-closed-print",
	});
}

export default Component;
