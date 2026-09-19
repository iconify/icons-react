import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kpibanbif.css';
import '../../css/m/m0_1_obnh.css';
import '../../css/e/egneazb5l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kpibanbif"/><path class="m0_1_obnh"/><path class="egneazb5l"/></g>`,
		"fallback": "at-icons:file-arrow-right",
	});
}

export default Component;
