import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r4b2gwbvq.css';
import '../../css/p/p3w2d7x_w.css';
import '../../css/g/geahrbbur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r4b2gwbvq"/><path class="p3w2d7x_w"/><path class="geahrbbur"/></g>`,
		"fallback": "streamline-freehand-color:cables-split",
	});
}

export default Component;
