import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wzw93jscg.css';
import '../../css/d/dv6zqccvt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wzw93jscg"/><path class="dv6zqccvt"/></g>`,
		"fallback": "glyphs:hand-holding-water-outline",
	});
}

export default Component;
