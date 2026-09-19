import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/thjz8px4p.css';
import '../../css/k/kutcy_blw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="thjz8px4p"/><path class="kutcy_blw"/></g>`,
		"fallback": "glyphs-poly:cross",
	});
}

export default Component;
