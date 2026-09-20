import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gpxs-3vco.css';
import '../../css/l/l6e6t_bwu.css';
import '../../css/z/zg9huqb-e.css';
import '../../css/f/fhdjwwbrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gpxs-3vco"/><path class="l6e6t_bwu"/><path class="zg9huqb-e"/><path class="fhdjwwbrg"/></g>`,
		"fallback": "solar:bill-2-bold-duotone",
	});
}

export default Component;
