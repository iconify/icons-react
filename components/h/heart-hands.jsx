import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/di_a2fdmj.css';
import '../../css/g/gwjve8uqr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="di_a2fdmj"/><path class="gwjve8uqr"/></g>`,
		"fallback": "glyphs-poly:heart-hands",
	});
}

export default Component;
