import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/ci5117w1h.css';
import '../../css/a/a47_f0m3e.css';
import '../../css/p/p_j979b9g.css';
import '../../css/e/enbo6ebuz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ci5117w1h"/><path class="a47_f0m3e"/><path class="p_j979b9g"/><path class="enbo6ebuz"/></g>`,
		"fallback": "glyphs:compass-outline",
	});
}

export default Component;
