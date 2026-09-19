import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dreuuh66c.css';
import '../../css/c/c7l0uwbsa.css';
import '../../css/d/dfm8uyd9a.css';
import '../../css/k/khrsx4-mv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dreuuh66c"/><path class="c7l0uwbsa"/><path class="dfm8uyd9a"/><path class="khrsx4-mv"/></g>`,
		"fallback": "glyphs:globe-oceania-outline",
	});
}

export default Component;
