import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zuenioh2k.css';
import '../../css/d/dg3f_fyeb.css';
import '../../css/y/ynzc3ibvs.css';
import '../../css/e/ehreetbpx.css';
import '../../css/i/io0rngbwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zuenioh2k"/><path class="dg3f_fyeb"/><path class="ynzc3ibvs"/><path class="ehreetbpx"/><path class="io0rngbwr"/></g>`,
		"fallback": "streamline-freehand-color:e-commerce-online-shop",
	});
}

export default Component;
