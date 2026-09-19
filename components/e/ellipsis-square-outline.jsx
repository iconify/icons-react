import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n6is9abdc.css';
import '../../css/d/d7g8dkb9v.css';
import '../../css/t/tya6-qb2l.css';
import '../../css/q/q7_qpybbv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n6is9abdc"/><path class="d7g8dkb9v"/><path class="tya6-qb2l"/><path class="q7_qpybbv"/></g>`,
		"fallback": "glyphs:ellipsis-square-outline",
	});
}

export default Component;
