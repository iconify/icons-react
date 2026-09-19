import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x4ohvibkb.css';
import '../../css/k/k1u3rdh2l.css';
import '../../css/c/cgfk3wd4h.css';
import '../../css/w/wa93a239p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="x4ohvibkb"/><path class="k1u3rdh2l"/><path class="cgfk3wd4h"/><path class="wa93a239p"/></g>`,
		"fallback": "glyphs:battery-2-outline",
	});
}

export default Component;
