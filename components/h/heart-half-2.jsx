import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/ck1931bjh.css';
import '../../css/r/r-0ieohmi.css';
import '../../css/q/q1pokukeb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ck1931bjh"/><path class="r-0ieohmi"/><path class="q1pokukeb"/></g>`,
		"fallback": "glyphs-poly:heart-half-2",
	});
}

export default Component;
