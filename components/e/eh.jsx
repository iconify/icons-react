import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/umbnhhb9z.css';
import '../../css/x/xnzk_khna.css';
import '../../css/r/r8actjfja.css';
import '../../css/z/zbnqi4l3x.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="umbnhhb9z"/><path class="xnzk_khna"/><path class="r8actjfja"/><path class="zbnqi4l3x"/></g>`,
		"fallback": "flagpack:eh",
	});
}

export default Component;
