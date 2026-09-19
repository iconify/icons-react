import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jm0276bny.css';
import '../../css/o/o7fhc-o-h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jm0276bny"/><path class="o7fhc-o-h"/></g>`,
		"fallback": "glyphs-poly:heart",
	});
}

export default Component;
