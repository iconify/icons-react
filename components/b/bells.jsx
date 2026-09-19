import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/ob04qqx7v.css';
import '../../css/n/n-omplb0y.css';
import '../../css/t/tennhxbfx.css';
import '../../css/n/nk5xvgx2e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ob04qqx7v"/><path class="n-omplb0y"/><path class="tennhxbfx"/><path class="nk5xvgx2e"/></g>`,
		"fallback": "glyphs-poly:bells",
	});
}

export default Component;
