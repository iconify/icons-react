import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v6np69bwi.css';
import '../../css/d/dd-r_8ilv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="v6np69bwi"/><path class="dd-r_8ilv"/></g>`,
		"fallback": "glyphs-poly:heartbeat",
	});
}

export default Component;
