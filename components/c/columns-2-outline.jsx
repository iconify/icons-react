import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p29szbc0q.css';
import '../../css/t/tw3fbblxk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p29szbc0q"/><path class="tw3fbblxk"/></g>`,
		"fallback": "glyphs:columns-2-outline",
	});
}

export default Component;
