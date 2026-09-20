import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bgg1chb6w.css';
import '../../css/n/nyv30ox3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bgg1chb6w"/><path class="nyv30ox3n"/></g>`,
		"fallback": "solar:armchair-2-bold-duotone",
	});
}

export default Component;
