import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jurz1cbnv.css';
import '../../css/o/oeevi_qsd.css';
import '../../css/d/dbinw_m8x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jurz1cbnv"/><path class="oeevi_qsd"/><path class="dbinw_m8x"/></g>`,
		"fallback": "glyphs:ellipsis-square-duo",
	});
}

export default Component;
